import mongoose from 'mongoose';
import sketches from '/utils/sketches';

const sketch = sketches.profiles.personal.socialMediaHandles;

const SocialMediaHandlesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
    requried: true,
  },

  instagram: {
    type: String,
    trim: true,
    minlength: sketch.instagram.length.min,
    maxlength: sketch.instagram.length.max,
    match: sketch.instagram.match,
  },

  twitter: {
    type: String,
    trim: true,
    minlength: sketch.twitter.length.min,
    maxlength: sketch.twitter.length.max,
    match: sketch.twitter.match,
  },

  facebook: {
    type: String,
    trim: true,
    minlength: sketch.facebook.length.min,
    maxlength: sketch.facebook.length.max,
    match: sketch.facebook.match,
  },

  linkedIn: {
    type: String,
    trim: true,
    minlength: sketch.linkedIn.length.min,
    maxlength: sketch.linkedIn.length.max,
    match: sketch.linkedIn.match,
  },
}, {
  timestamps: true,
});

export default mongoose.models.SocialMediaHandles || mongoose.model('SocialMediaHandles', SocialMediaHandlesSchema);
