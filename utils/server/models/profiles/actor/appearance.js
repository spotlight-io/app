import mongoose from 'mongoose';
import sketches from '/utils/sketches';

const sketch = sketches.profiles.actor.appearance;

const AppearanceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
    requried: true,
  },

  bio: {
    type: String,
    trim: true,
  },

  age: {
    type: [{
      type: Number,
      required: true,
      min: sketch.age.range.min,
      max: sketch.age.range.max,
    }],
  },

  height: {
    type: Number,
    required: true,
    min: sketch.height.range.min,
    max: sketch.height.range.max,
  },

  weight: {
    type: Number,
    required: true,
    min: sketch.weight.range.min,
    max: sketch.weight.range.max,
  },

  body: {
    type: String,
    required: true,
    enum: sketch.body.options
      .map((option) => option.value),
  },

  ethnicities: {
    type: [{
      type: String,
      required: true,
      enum: sketch.ethnicities.options
        .map((option) => option.value),
    }],
  },

  colors: {
    eye: {
      type: String,
      trim: true,
      requried: true,
      enum: sketch.colors.eye.options
        .map((option) => option.value),
    },
    hair: {
      type: String,
      trim: true,
      requried: true,
      enum: sketch.colors.hair.options
        .map((option) => option.value),
    },
    skin: {
      type: String,
      trim: true,
      requried: true,
      enum: sketch.colors.skin.options
        .map((option) => option.value),
    },
  },
}, {
  timestamps: true,
});

export default mongoose.models.Appearance || mongoose.model('Appearance', AppearanceSchema);
