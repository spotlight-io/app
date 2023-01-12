import jsonwebtoken from 'jsonwebtoken';
import config from '/utils/config';
import User from '/utils/server/models/user';
import AppError from '/utils/server/error';

export default async function decode(authorization) {
  if (authorization === undefined) {
    throw new AppError(`${config.app.name}Unauthorized`);
  }

  const token = authorization.split(' ').slice(-1).pop();

  if (token === null) {
    throw new AppError(`${config.app.name}Unauthorized`);
  }

  const {
    _id,
    session,
  } = jsonwebtoken.verify(token, process.env.JWT_SECRET);

  const userInstance = await User.findOne({
    _id,
    session,
  });

  if (userInstance === null) {
    throw new AppError(`${config.app.name}NotFound`, [], {
      _id,
      session,
    });
  }

  return {
    user: userInstance,
  };
}
