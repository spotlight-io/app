import mongoose from 'mongoose';
import sketches from '/utils/sketches';

const sketch = sketches.profiles.personal.details;

const DetailsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
    requried: true,
  },

  name: {
    first: {
      type: String,
      trim: true,
      requried: true,
      minlength: sketch.name.first.length.min,
      maxlength: sketch.name.first.length.max,
      match: sketch.name.first.match,
    },
    last: {
      type: String,
      trim: true,
      requried: true,
      minlength: sketch.name.last.length.min,
      maxlength: sketch.name.last.length.max,
      match: sketch.name.last.match,
    },
  },

  dateOfBirth: {
    type: Date,
    required: true,
  },

  genderIdentities: {
    type: [{
      type: String,
      required: true,
      enum: sketch.genderIdentities.options
        .map((option) => option.value),
    }],
  },

  username: {
    type: String,
    trim: true,
    requried: true,
    unique: true,
    lowercase: true,
    minlength: sketch.username.length.min,
    maxlength: sketch.username.length.max,
    match: sketch.username.match,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Details || mongoose.model('Details', DetailsSchema);
