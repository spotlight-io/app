import Joi from 'joi';
import {
  getEmailSchema,
  getPasswordScehma,
} from '/utils/schemas';

export default Joi.object({
  email: getEmailSchema()
    .required(),

  password: getPasswordScehma()
    .required(),
});
