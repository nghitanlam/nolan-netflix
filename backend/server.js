import express from "express";

import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", movieRoutes);
app.use("/api/v1/tv", tvRoutes);

app.listen(ENV_VARS.PORT, () => {
  connectDB();
  console.log(`✅ Server started at http://localhost:${ENV_VARS.PORT}`);
});
