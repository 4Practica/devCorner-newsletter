import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import newsletterRoutes from "./routes/newsletter.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { env } from "./utils/env.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/newsletter", newsletterRoutes);

app.use(errorHandler);

const PORT = env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`🚀 Newsletter service running on port ${PORT}`);
});
