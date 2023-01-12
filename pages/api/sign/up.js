import bcryptjs from 'bcryptjs';
import api from '/utils/server/api';
import signUpSchema from '/utils/schemas/sign/up';
import User from '/utils/server/models/user';

export default async function upApi(req, res) {
  await api(req, res, {
    post: async () => {
      const user = await signUpSchema.validateAsync(req.body, {
        abortEarly: false,
      });

      const userInstance = new User(user);
      userInstance.password = bcryptjs.hashSync(user.password, 10);

      await userInstance.save();

      return {
        user: userInstance,
      };
    },
  });
}
