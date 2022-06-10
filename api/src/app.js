import express from "express";
import morgan from "morgan";
import pkg from "../package.json";

//Libs
import { createRoles } from "./libs/initialSetup";

// Routes Import
import authRoutes from "./routes/auth.routes";
import postRoutes from "./routes/post.routes";
import featuredRoutes from "./routes/featured.routes";
import followRoutes from "./routes/follow.routes";
const app = express();

// Initial Setup
createRoles();

// Uses
app.use(express.json());
app.use(morgan("dev"));
// CORS

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

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
app.use("/api/post", featuredRoutes);
app.use("/api", followRoutes);
export default app;
