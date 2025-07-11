import axios from "axios";
import { env } from "../utils/env.js";

export const sendEmailTo = async (toEmail, templateId, params = {}) => {
	const data = {
		to: [{ email: toEmail }],
		templateId: parseInt(templateId),
		sender: {
			name: env.FROM_NAME,
			email: env.FROM_EMAIL,
		},
	};

	if (Object.keys(params).length > 0) {
		data.params = params;
	}

	const headers = {
		"api-key": env.BREVO_API_KEY,
		"Content-Type": "application/json",
		Accept: "application/json",
	};

	const response = await axios.post(
		"https://api.brevo.com/v3/smtp/email",
		data,
		{ headers }
	);

	return response.data;
};
