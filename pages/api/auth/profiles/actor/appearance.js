import config from '/utils/config';
import api from '/utils/server/api';
import decode from '/utils/server/decode';
import appearanceSchema from '/utils/schemas/profiles/actor/appearance';
import Appearance from '/utils/server/models/profiles/actor/appearance';
import AppError from '/utils/server/error';

export default async function appearanceApi(req, res) {
  await api(req, res, {
    get: async () => {
      const {
        user: userInstance,
      } = await decode(req.headers.authorization);

      const appearanceInstance = await Appearance.findOne({
        user: userInstance._id,
      });

      if (appearanceInstance === null) {
        throw new AppError(
          `${config.app.name}NotFound`,
          [],
          {
            user: userInstance,
          },
        );
      }

      return {
        appearance: appearanceInstance,
      };
    },
    post: async () => {
      const {
        user: userInstance,
      } = await decode(req.headers.authorization);

      const appearance = await appearanceSchema.validateAsync(req.body, {
        abortEarly: false,
      });

      let appearanceInstance = await Appearance.findOne({
        user: userInstance._id,
      });

      appearance.age.sort();

      if (appearanceInstance) {
        Object.assign(appearanceInstance, appearance);
      } else {
        appearanceInstance = new Appearance(appearance);
        appearanceInstance.user = userInstance._id;
      }

      await appearanceInstance.save();

      return {
        appearance: appearanceInstance,
      };
    },
  });
}
