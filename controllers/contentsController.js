import * as contentsService from '../services/contentsService.js';

export const addContent = async (req, res) => {
	try {
		const { categoryId, newContentText } = req.body;
		const data = await contentsService.addContent(categoryId, newContentText);
		res.status(201).json({ data: data });
	} catch (error) {
		console.error(error);
		error.message = 'ERROR_OCCURRED';
		res.status(error.statusCode).json({ message: error.message });
	}
};

export const modifyContent = async (req, res) => {
	try {
		const { id, text } = req.body;
		await contentsService.modifyContent(id, text);
		res.status(200).json({ message: 'CONTENT_MODIFIED' });
	} catch (error) {
		console.error(error);
		error.message = 'ERROR_OCCURRED';
		res.status(error.statusCode).json({ message: error.message });
	}
};

export const removeContent = async (req, res) => {
	try {
		const { id } = req.body;
		await contentsService.removeContent(id);
		res.status(200).json({ message: 'CONTENT_REMOVED' });
	} catch (error) {
		console.error(error);
		error.message = 'ERROR_OCCURRED';
		res.status(error.statusCode).json({ message: error.message });
	}
};
