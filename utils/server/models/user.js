import mongoose from 'mongoose';
import sketches from '/utils/sketches';

const sketch = sketches.user;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: sketch.email.length.min,
    maxlength: sketch.email.length.max,
    match: sketch.email.match,
  },

  password: {
    type: String,
    requried: true,
    minlength: sketch.password.length.min,
    maxlength: sketch.password.length.max,
  },

  session: {
    type: mongoose.Schema.Types.ObjectId,
    requried: true,
  },
}, {
  timestamps: true,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
