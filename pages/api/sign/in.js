import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import config from '/utils/config';
import api from '/utils/server/api';
import signInSchema from '/utils/schemas/sign/in';
import User from '/utils/server/models/user';
import AppError from '/utils/server/error';

export default async function inApi(req, res) {
  await api(req, res, {
    post: async () => {
      const user = await signInSchema.validateAsync(req.body, {
        abortEarly: false,
      });

      const userInstance = await User.findOne({
        email: user.email,
      });

      if (userInstance === null) {
        throw new AppError(
          `${config.app.name}NotFound`,
          [
            {
              field: 'email',
              message: config.loremIpsum,
            },
          ],
          {
            user,
          },
        );
      }

      if (bcryptjs.compareSync(user.password, userInstance.password) === false) {
        throw new AppError(
          `${config.app.name}Unauthorized`,
          [
            {
              field: 'password',
              message: config.loremIpsum,
            },
          ],
          {
            user,
          },
        );
      }

      // Add session
      userInstance.session = mongoose.Types.ObjectId();
      await userInstance.save();

      // Generate authorization token
      const token = jsonwebtoken.sign(
        {
          _id: userInstance._id.toHexString(),
          session: userInstance.session.toHexString(),
        },
        process.env.JWT_SECRET,
        {
          algorithm: process.env.JWT_ALGORITHM,
        },
      );

      return {
        token,
        user: userInstance,
      };
    },
  });
}
