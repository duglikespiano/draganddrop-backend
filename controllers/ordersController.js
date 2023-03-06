import * as ordersService from '../services/ordersService.js';

export const modifyContentsOrderInSameCategory = async (req, res) => {
	try {
		const { contentCategoryId, sourceContentOrderInf, targetContentOrderInf } =
			req.body;
		await ordersService.modifyContentsOrderInSameCategory(
			contentCategoryId,
			sourceContentOrderInf,
			targetContentOrderInf
		);
		res.status(200).json({ message: 'CONTENTS ORDER MODIFIED' });
	} catch (error) {
		console.error(error);
		error.message = 'ERROR_OCCURRED';
		res.status(error.statusCode).json({ message: error.message });
	}
};

export const modifyContentsOrderAmongDifferentCategories = async (req, res) => {
	try {
		const {
			sourceContentId,
			sourceCategoryId,
			targetCategoryId,
			sourceContentOrderInf,
			targetContentOrderInf,
		} = req.body;

		await ordersService.modifyContentsOrderAmongDifferentCategories(
			sourceContentId,
			sourceCategoryId,
			targetCategoryId,
			sourceContentOrderInf,
			targetContentOrderInf
		);
		res.status(200).json({ message: 'CONTENTS MOVED TO OTHER CATEGORY' });
	} catch (error) {
		console.error(error);
		error.message = 'ERROR_OCCURRED';
		res.status(error.statusCode).json({ message: error.message });
	}
};

export const modifyCategoriesOrder = async (req, res) => {
	try {
		const { sourceOrderInf, targetOrderInf } = req.body;
		await ordersService.modifyCategoriesOrder(sourceOrderInf, targetOrderInf);
		res.status(200).json({ message: 'CATEGORY ORDER MODIFIED' });
	} catch (error) {
		console.error(error);
		error.message = 'ERROR_OCCURRED';
		res.status(error.statusCode).json({ message: error.message });
	}
};
