import Joi from 'joi';
import sketches from '/utils/sketches';

const sketch = sketches.profiles.personal.details;

export default Joi.object({
  name: Joi.object({
    first: Joi.string()
      .trim()
      .alphanum()
      .min(sketch.name.first.length.min)
      .max(sketch.name.first.length.max)
      .regex(sketch.name.first.match)
      .required()
      .label(sketch.name.first.label),

    last: Joi.string()
      .trim()
      .alphanum()
      .min(sketch.name.last.length.min)
      .max(sketch.name.last.length.max)
      .regex(sketch.name.last.match)
      .required()
      .label(sketch.name.last.label),
  }),

  dateOfBirth: Joi.date()
    .iso()
    .required()
    .label(sketch.dateOfBirth.label),

  genderIdentities: Joi.array()
    .items(
      Joi.string()
        .valid(...sketch.genderIdentities.options.map(
          (genderIdentity) => genderIdentity.value,
        )),
    )
    .min(sketch.genderIdentities.length.min)
    .max(sketch.genderIdentities.length.max)
    .label(sketch.genderIdentities.label),

  username: Joi.string()
    .trim()
    .alphanum()
    .lowercase()
    .min(sketch.username.length.min)
    .max(sketch.username.length.max)
    .regex(sketch.username.match)
    .required()
    .label(sketch.username.label),
});
