import { verifyToken, isAdmin, isModerator } from "./authJwt";

const middlewares = {
  verifyToken,
  isAdmin,
  isModerator,
};

export default middlewares;
