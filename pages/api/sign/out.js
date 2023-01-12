import mongoose from 'mongoose';
import api from '/utils/server/api';
import decode from '/utils/server/decode';

export default async function outApi(req, res) {
  await api(req, res, {
    post: async () => {
      const {
        user: userInstance,
      } = await decode(req.headers.authorization);

      userInstance.session = new mongoose.Types.ObjectId();

      await userInstance.save();

      return {
        user: userInstance,
      };
    },
  });
}
