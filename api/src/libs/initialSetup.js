import RoleModel from "../models/RoleModel";

export const createRoles = async () => {
  try {
    const counter = await RoleModel.estimatedDocumentCount();
    if (counter > 0) return;
    const values = await Promise.all([
      new RoleModel({
        name: "user",
      }).save(),
      new RoleModel({
        name: "moderator",
      }).save(),
      new RoleModel({
        name: "admin",
      }).save(),
    ]);
    console.log(values);
  } catch (error) {
    console.log(error);
  }
};
