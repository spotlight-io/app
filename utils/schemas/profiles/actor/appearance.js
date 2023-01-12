import Joi from 'joi';
import sketches from '/utils/sketches';

const sketch = sketches.profiles.actor.appearance;

export default Joi.object({
  active: Joi.boolean(),

  bio: Joi.string()
    .trim()
    .min(sketch.bio.length.min)
    .max(sketch.bio.length.max)
    .allow('')
    .label(sketch.bio.label),

  age: Joi.array()
    .items(
      Joi.number()
        .integer()
        .min(sketch.age.range.min)
        .max(sketch.age.range.max)
        .required(),
    )
    .min(2)
    .max(2)
    .label(sketch.age.label),

  height: Joi.number()
    .integer()
    .min(sketch.height.range.min)
    .max(sketch.height.range.max)
    .required()
    .label(sketch.height.label),

  weight: Joi.number()
    .integer()
    .min(sketch.weight.range.min)
    .max(sketch.weight.range.max)
    .required()
    .label(sketch.weight.label),

  body: Joi.string()
    .valid(...sketch.body.options.map(
      (option) => option.value,
    ))
    .required()
    .label(sketch.body.label),

  ethnicities: Joi.array()
    .items(
      Joi.string()
        .valid(...sketch.ethnicities.options.map(
          (option) => option.value,
        )),
    )
    .min(sketch.ethnicities.length.min)
    .max(sketch.ethnicities.length.max)
    .required()
    .label(sketch.ethnicities.label),

  colors: Joi.object({
    eye: Joi.string()
      .valid(...sketch.colors.eye.options.map(
        (option) => option.value,
      ))
      .required()
      .label(sketch.colors.eye.label),

    hair: Joi.string()
      .valid(...sketch.colors.hair.options.map(
        (option) => option.value,
      ))
      .required()
      .label(sketch.colors.hair.label),

    skin: Joi.string()
      .valid(...sketch.colors.skin.options.map(
        (option) => option.value,
      ))
      .required()
      .label(sketch.colors.skin.label),
  }),
});
