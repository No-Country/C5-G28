import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      unique: false,
    },
    bornDate: {
      type: Date,
    },
    urlProfile: {
      type: String,
    },
    urlProfile: {
      type: String,
    },
    roles: [
      {
        ref: "RoleModel",
        type: Schema.Types.ObjectId,
      },
    ],
    resetToken: {
      type: String,
    },
    confirmToken: {
      type: String,
    },
    confirmedAccount: {
      type: Boolean,
      default: false,
    },
    likes: {
      type: [String],
    },
    postSaved: {
      type: [String],
    },
    preferences: {
      type: [String],
    },
    follows: {
      type: [String],
    },
  },
  { timestamps: true, versionKey: false }
);

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

export default model("UserModel", userSchema);
