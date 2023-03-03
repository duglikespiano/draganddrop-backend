import * as categoriesService from '../services/categoriesService.js';

export const getAllCategoriesAndContents = async (req, res) => {
	try {
		const data = await categoriesService.getAllCategoriesAndContents();
		res.status(200).json({ data: data });
	} catch (error) {
		console.error(error);
		error.message = 'ERROR_OCCURRED';
		res.status(error.statusCode).json({ message: error.message });
	}
};

export const addCategory = async (req, res) => {
	try {
		const data = await categoriesService.addCategory();
		res.status(200).json({ data: data });
	} catch (error) {
		console.error(error);
		error.message = 'ERROR_OCCURRED';
		res.status(error.statusCode).json({ message: error.message });
	}
};

export const modifyCategoryName = async (req, res) => {
	try {
		const { id, name } = req.body;
		await categoriesService.modifyCategoryName(id, name);
		res.status(200).json({ message: 'CATEGORYNAME_MODIFIED' });
	} catch (error) {
		console.error(error);
		error.message = 'ERROR_OCCURRED';
		res.status(error.statusCode).json({ message: error.message });
	}
};

export const removeCategory = async (req, res) => {
	try {
		const { id } = req.body;
		await categoriesService.removeCategory(id);
		res.status(200).json({ message: 'CATEGORY_REMOVED' });
	} catch (error) {
		console.error(error);
		error.message = 'ERROR_OCCURRED';
		res.status(error.statusCode).json({ message: error.message });
	}
};
