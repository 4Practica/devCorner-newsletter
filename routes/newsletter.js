import express from 'express';
import { registerSubscriber, sendNewsletter } from '../controllers/newsletterController.js';
import { apiKeyAuth } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', apiKeyAuth, registerSubscriber);
router.post('/new-post', apiKeyAuth, sendNewsletter);

export default router;