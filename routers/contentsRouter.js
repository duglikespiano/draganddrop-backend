import express from 'express';
import * as contentController from '../controllers/contentsController.js';
const router = express.Router();

router.post('/', (req, res) => {
	contentController.addContent(req, res);
});

router.put('/', (req, res) => {
	contentController.modifyContent(req, res);
});

router.delete('/', (req, res) => {
	contentController.removeContent(req, res);
});

export default router;
