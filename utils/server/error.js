import assert from 'assert';
import config from '/utils/config';

const AppErrors = [
  {
    name: `${config.app.name}ValidationErrorX`, // Joi
    status: 400,
  },
  {
    name: `${config.app.name}ValidationErrorY`, // Mongoose
    status: 400,
  },
  {
    name: `${config.app.name}ValidationErrorZ`, // Mongoose (should be logged)
    status: 400,
  },
  {
    name: `${config.app.name}Unauthorized`,
    status: 401,
  },
  {
    name: `${config.app.name}NotFound`,
    status: 404,
  },
  {
    name: `${config.app.name}MethodNotAllowed`,
    status: 405,
  },
  {
    name: `${config.app.name}InternalServerError`,
    status: 500,
  },
];

export default class AppError extends Error {
  constructor(name, fields = [], meta = {}) {
    try {
      assert(AppErrors.map((error) => error.name).indexOf(name) > -1);
    } catch (error) {
      // TODO: log

      // eslint-disable-next-line no-param-reassign
      name = AppErrors[AppErrors.length - 1].name;
      // eslint-disable-next-line no-param-reassign
      meta = {
        error,
      };
    } finally {
      super(config.loremIpsum);

      this.name = name;
      this.fields = fields;
      this.meta = meta;

      this.status = AppErrors.find((error) => error.name === this.name).status;
    }
  }
}
