import express from "express";
import morgan from "morgan";
import pkg from "../package.json";

//Libs
import { createRoles } from "./libs/initialSetup";

// Routes Import
import authRoutes from "./routes/auth.routes";
import postRoutes from "./routes/post.routes"
const app = express();

// Initial Setup
createRoles();

// Uses
app.use(express.json());
app.use(morgan("dev"));

// Data del proyecto
app.set("pkg", pkg);
app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
export default app;
