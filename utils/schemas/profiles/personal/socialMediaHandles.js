import Joi from 'joi';
import sketches from '/utils/sketches';

const sketch = sketches.profiles.personal.socialMediaHandles;

export default Joi.object({
  instagram: Joi.string()
    .trim()
    .min(sketch.instagram.length.min)
    .max(sketch.instagram.length.max)
    .regex(sketch.instagram.match)
    .allow('')
    .label(sketch.instagram.label),

  twitter: Joi.string()
    .trim()
    .min(sketch.twitter.length.min)
    .max(sketch.twitter.length.max)
    .regex(sketch.twitter.match)
    .allow('')
    .label(sketch.twitter.label),

  facebook: Joi.string()
    .trim()
    .min(sketch.facebook.length.min)
    .max(sketch.facebook.length.max)
    .regex(sketch.facebook.match)
    .allow('')
    .label(sketch.facebook.label),

  linkedIn: Joi.string()
    .trim()
    .min(sketch.linkedIn.length.min)
    .max(sketch.linkedIn.length.max)
    .regex(sketch.linkedIn.match)
    .allow('')
    .label(sketch.linkedIn.label),
});
