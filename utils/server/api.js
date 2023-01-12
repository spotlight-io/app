import config from '/utils/config';
import connect from '/utils/server/mongodb';
import AppError from '/utils/server/error';

export default async function api(req, res, {
  get,
  post,
  put,
  patch,
  del,
}) {
  const {
    method,
    url,
  } = req;

  // Map handlers based on the method
  const getHandler = () => {
    switch (req.method) {
      case 'GET':
        return get;
      case 'POST':
        return post;
      case 'PUT':
        return put;
      case 'PATCH':
        return patch;
      case 'DELETE':
        return del;
      default:
        return null;
    }
  };

  try {
    // Connect to the database
    await connect();

    const handler = getHandler();

    if (handler === undefined) {
      throw new AppError(
        `${config.app.name}MethodNotAllowed`,
        [],
        {
          method,
          url,
        },
      );
    }

    // Run forrest run!
    const json = await handler();

    res.status(200)
      .json(json);
  } catch (error) {
    let AppError;
    if (error.name.startsWith(config.app.name)) {
      AppError = error;
    }

    if (error.name === 'ValidationError') {
      if (error.errors) {
        // Mongoose
        AppError = new AppError(
          `${config.app.name}ValidationErrorZ`,
          Object.keys(error.errors).map((key) => ({
            field: key,
            message: config.loremIpsum,
          })),
          {},
        );
      }

      if (error.details) {
        // Joi
        AppError = new AppError(
          `${config.app.name}ValidationErrorX`,
          error.details.map((detail) => ({
            field: detail.path.join('.'),
            message: detail.message,
          })),
          {},
        );
      }
    }

    if (error.name === 'MongoServerError') {
      const { code } = error;

      // MongoServerError: E11000 duplicate key error collection
      if (code === 11000) {
        const {
          keyValue,
        } = error;

        AppError = new AppError(
          `${config.app.name}ValidationErrorY`,
          Object.keys(keyValue).map((key) => ({
            field: key,
            message: config.loremIpsum,
          })),
          {},
        );
      }
    }

    if (AppError === undefined) {
      // TODO: log
      // eslint-disable-next-line no-console
      console.error(error);

      AppError = new AppError(
        `${config.app.name}InternalServerError`,
        [],
        {
          error,
        },
      );
    }

    const {
      status,
      name,
      fields,
      meta,
    } = AppError;

    res.status(status)
      .json({
        name,
        fields,
        meta,
      });
  }
}
