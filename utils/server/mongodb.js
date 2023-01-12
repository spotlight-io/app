import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

const connect = async () => {
  if (mongoose.connection.readyState) {
    // 5*
  } else {
    mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  }
};

export default connect;
