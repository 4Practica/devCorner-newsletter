import { addEmailToList, sendEmailTo } from "../services/mailService.js";
import { validateEmail } from "../utils/validateEmail.js";
import { env } from "../utils/env.js";

export const registerSubscriber = async (req, res, next) => {
	try {
		const { email } = req.body;
		if (!validateEmail(email)) {
			return res.status(400).json({ message: "Invalid email address" });
		}

		const added = await addEmailToList(email);
		const emailInfo = await sendEmailTo(email, env.BREVO_TEMPLATE_ID_WELCOME);

		if (!emailInfo.messageId || !added.id) {
			return res.status(500).json({ message: "Failed to send welcome email" });
		}

		res.status(200).json({ message: "Welcome email sent successfully" });
	} catch (err) {
		next(err);
	}
};

export const sendNewsletter = async (req, res, next) => {
	try {
		const subscribers = req.body.subscribers; // Array of subscriber objects with email property
		for (const subscriber of subscribers) {
			await sendEmailTo(subscriber.email, env.BREVO_TEMPLATE_ID_NEW_POST);
		}

		res.status(200).json({ message: "Newsletter sent successfully" });
	} catch (err) {
		next(err);
	}
};
