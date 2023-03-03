import * as ordersService from '../services/ordersService.js';

export const modifyContentsOrderInSameCategory = async (req, res) => {
	try {
		const { sourceContentOrderInf, targetContentOrderInf } = req.body;
		await ordersService.modifyContentsOrderInSameCategory(
			sourceContentOrderInf,
			targetContentOrderInf
		);
		res.status(200);
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
		res.status(200);
	} catch (error) {
		console.error(error);
		error.message = 'ERROR_OCCURRED';
		res.status(error.statusCode).json({ message: error.message });
	}
};

export const modifyCategoriesOrder = async (req, res) => {
	try {
		let { sourceOrderInf, targetOrderInf } = req.body;
		sourceOrderInf = sourceOrderInf + 1;
		targetOrderInf = targetOrderInf + 1;
		await ordersService.modifyCategoriesOrder(sourceOrderInf, targetOrderInf);
		res.status(200);
	} catch (error) {
		console.error(error);
		error.message = 'ERROR_OCCURRED';
		res.status(error.statusCode).json({ message: error.message });
	}
};
