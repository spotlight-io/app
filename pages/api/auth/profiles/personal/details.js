import config from '/utils/config';
import api from '/utils/server/api';
import decode from '/utils/server/decode';
import detailsSchema from '/utils/schemas/profiles/personal/details';
import Details from '/utils/server/models/profiles/personal/details';
import AppError from '/utils/server/error';

export default async function detailsApi(req, res) {
  await api(req, res, {
    get: async () => {
      const {
        user: userInstance,
      } = await decode(req.headers.authorization);

      const detailsInstance = await Details.findOne({
        user: userInstance._id,
      });

      if (detailsInstance === null) {
        throw new AppError(
          `${config.app.name}NotFound`,
          [],
          {
            user: userInstance,
          },
        );
      }

      return {
        details: detailsInstance,
      };
    },
    post: async () => {
      const {
        user: userInstance,
      } = await decode(req.headers.authorization);

      const details = await detailsSchema.validateAsync(req.body, {
        abortEarly: false,
      });

      let detailsInstance = await Details.findOne({
        user: userInstance._id,
      });

      if (detailsInstance) {
        Object.assign(detailsInstance, details);
      } else {
        detailsInstance = new Details(details);
        detailsInstance.user = userInstance._id;
      }

      await detailsInstance.save();

      return {
        details: detailsInstance,
      };
    },
  });
}
