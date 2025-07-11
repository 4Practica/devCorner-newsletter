import { sendEmailTo } from "../services/mailService.js";
import { validateEmail } from "../utils/validateEmail.js";
import { env } from "../utils/env.js";

export const registerSubscriber = async (req, res, next) => {
	try {
		const { email } = req.body;
		if (!validateEmail(email)) {
			return res.status(400).json({ message: "Invalid email address" });
		}

		// Aquí podrías guardar el email en tu CMS o DB si lo deseas

		await sendEmailTo(email, env.BREVO_TEMPLATE_ID_WELCOME);
		res.status(200).json({ message: "Welcome email sent successfully" });
	} catch (err) {
		next(err);
	}
};

export const sendNewsletter = async (req, res, next) => {
	try {
		const subscribers = [
			{ email: "velasquezdenorajose@gmail.com" },
			{ email: "jvdenora@gmail.com" },
		];

		for (const subscriber of subscribers) {
			await sendEmailTo(subscriber.email, env.BREVO_TEMPLATE_ID_NEW_POST);
		}

		res.status(200).json({ message: "Newsletter sent successfully" });
	} catch (err) {
		next(err);
	}
};
