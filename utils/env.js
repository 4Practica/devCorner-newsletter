import dotenv from "dotenv";
dotenv.config();

export const env = {
	PORT: process.env.PORT,
	API_KEY: process.env.API_KEY,
	BREVO_API_KEY: process.env.BREVO_API_KEY,
	BREVO_TEMPLATE_ID_WELCOME: process.env.BREVO_TEMPLATE_ID_WELCOME,
	BREVO_TEMPLATE_ID_NEW_POST: process.env.BREVO_TEMPLATE_ID_NEW_POST,
	FROM_NAME: process.env.FROM_NAME,
	FROM_EMAIL: process.env.FROM_EMAIL,
	BREVO_LIST_ID: parseInt(process.env.BREVO_LIST_ID),
};
