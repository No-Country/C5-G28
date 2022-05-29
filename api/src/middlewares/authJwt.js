import jwt from "jsonwebtoken";
import config from "../config";

// Models
import UserModel from "../models/UserModel";
import RoleModel from "../models/RoleModel";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(403).json({ message: "No token provided" });

    const decoded = jwt.verify(token, config.SECRET);

    const userExists = await UserModel.findById(decoded.id, { password: 0 });
    // Cargo en el req para el next
    req.userId = decoded.id;

    if (!userExists)
      return res.status(400).json({ message: "The user not exists" });

    next();
  } catch (error) {
    return res.status(400).json({ message: "Unauthorized" });
  }
};

export const isModerator = async (req, res, next) => {
  const { userId } = req;

  const userExists = await UserModel.findById(userId);

  const roles = await RoleModel.find({ _id: { $in: userExists.roles } });

  const roleExists = roles.find((role) => role.name === "moderator");

  if (roleExists) {
    return next();
  }

  return res.status(400).json({ message: "The user is not a moderator" });
};

export const isAdmin = async (req, res, next) => {
  const { userId } = req;

  const userExists = await UserModel.findById(userId);

  const roles = await RoleModel.find({ _id: { $in: userExists.roles } });

  console.log(roles);

  const roleExists = roles.find((role) => role.name === "admin");

  if (roleExists) {
    return next();
  }

  return res.status(400).json({ message: "The user is not an admin" });
};
