import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;