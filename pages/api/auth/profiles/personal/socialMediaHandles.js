import config from '/utils/config';
import api from '/utils/server/api';
import decode from '/utils/server/decode';
import socialMediaHandlesSchema from '/utils/schemas/profiles/personal/socialMediaHandles';
import SocialMediaHandles from '/utils/server/models/profiles/personal/socialMediaHandles';
import AppError from '/utils/server/error';

export default async function socialMediaHandlesApi(req, res) {
  await api(req, res, {
    get: async () => {
      const {
        user: userInstance,
      } = await decode(req.headers.authorization);

      const socialMediaHandlesInstance = await SocialMediaHandles.findOne({
        user: userInstance._id,
      });

      if (socialMediaHandlesInstance === null) {
        throw new AppError(
          `${config.app.name}NotFound`,
          [],
          {
            user: userInstance,
          },
        );
      }

      return {
        socialMediaHandles: socialMediaHandlesInstance,
      };
    },
    post: async () => {
      const {
        user: userInstance,
      } = await decode(req.headers.authorization);

      const socialMediaHandles = await socialMediaHandlesSchema.validateAsync(req.body, {
        abortEarly: false,
      });

      let socialMediaHandlesInstance = await SocialMediaHandles.findOne({
        user: userInstance._id,
      });

      if (socialMediaHandlesInstance) {
        Object.assign(socialMediaHandlesInstance, socialMediaHandles);
      } else {
        socialMediaHandlesInstance = new SocialMediaHandles(socialMediaHandles);
        socialMediaHandlesInstance.user = userInstance._id;
      }

      await socialMediaHandlesInstance.save();

      return {
        socialMediaHandles: socialMediaHandlesInstance,
      };
    },
  });
}
