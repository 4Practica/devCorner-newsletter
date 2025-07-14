import axios from "axios";
import { env } from "../utils/env.js";

const headers = {
	"api-key": env.BREVO_API_KEY,
	"Content-Type": "application/json",
	Accept: "application/json",
};

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

	const response = await axios.post(
		"https://api.brevo.com/v3/smtp/email",
		data,
		{ headers }
	);

	return response.data;
};

export const addEmailToList = async (email) => {
	const data = {
		email: email,
		listIds: [env.BREVO_LIST_ID],
	};

	const response = await axios.post("https://api.brevo.com/v3/contacts", data, {
		headers,
	});

	return response.data;
};
