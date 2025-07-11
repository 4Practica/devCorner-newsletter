import { env } from "../utils/env.js";

export const apiKeyAuth = (req, res, next) => {
	const apiKey = req.headers["x-api-key"];
	if (apiKey !== env.API_KEY) {
		return res.status(403).json({ message: "Forbidden: Invalid API Key" });
	}
	next();
};
