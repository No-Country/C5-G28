import UserModel from "../models/UserModel";
import RoleModel from "../models/RoleModel";
import config from "../config";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const userExists = await UserModel.findOne({ email });
  if (userExists) return res.json({ message: "User aready exists" });

  const newUser = new UserModel({
    username,
    email,
    password: await UserModel.encryptPassword(password),
  });

  if (roles) {
    const foundedRoles = await RoleModel.find({ name: { $in: roles } });
    newUser.roles = foundedRoles.map((role) => role._id);
  } else {
    const role = await RoleModel.findOne({ name: "user" });
    newUser.roles = [role._id];
  }

  const savedUser = await newUser.save();

  const token = jwt.sign(
    { id: savedUser._id, email, username },
    config.SECRET,
    {
      expiresIn: 86400,
    }
  );

  return res.status(201).json({ message: "Signup succesfully", token });
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  const userExists = await UserModel.findOne({ email }).populate("roles");

  if (!userExists) return res.status(400).json({ message: "User not found" });

  const matchPassword = await UserModel.comparePassword(
    password,
    userExists.password
  );

  if (!matchPassword)
    return res.status(400).json({ token: null, message: "Incorrect password" });

  const token = jwt.sign({ id: userExists._id }, config.SECRET, {
    expiresIn: 86400,
  });

  return res.json({ token, message: "SignIn succesfully" });
};
