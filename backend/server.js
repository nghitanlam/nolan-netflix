import express from "express";

import { ENV_VARS } from "./config/envVars.js";

import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./config/db.js";

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);

app.listen(ENV_VARS.PORT, () => {
  connectDB();
  console.log(`✅ Server started at http://localhost:${ENV_VARS.PORT}`);
});

