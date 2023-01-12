import Joi from 'joi';
import sketches from '/utils/sketches';

function getEmailSchema() {
  return Joi.string()
    .trim()
    .lowercase()
    .email({
      tlds: {
        allow: false,
      },
    })
    .label(sketches.user.email.label);
}

function getPasswordScehma() {
  return Joi.string()
    .min(sketches.user.password.length.min)
    .max(sketches.user.password.length.max)
    .label(sketches.user.password.label);
}

export {
  getEmailSchema,
  getPasswordScehma,
};
