import express from "express";
import type { Handler } from "vite-plugin-mix";
import * as dotenv from "dotenv";
import api from "./routes/api";
import "./database";
dotenv.config();
const router = express();

api(router);

export const handler: Handler = router;
