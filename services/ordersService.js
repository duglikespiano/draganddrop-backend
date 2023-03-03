import * as ordersDao from '../models/ordersDao.js';

export const modifyContentsOrderInSameCategory = async (
	sourceOrderInf,
	targetOrderInf
) => {
	return await ordersDao.modifyContentsOrderInSameCategory(
		sourceOrderInf,
		targetOrderInf
	);
};

export const modifyContentsOrderAmongDifferentCategories = async (
	sourceContentId,
	sourceCategoryId,
	targetCategoryId,
	sourceContentOrderInf,
	targetContentOrderInf
) => {
	return await ordersDao.modifyContentsOrderAmongDifferentCategories(
		sourceContentId,
		sourceCategoryId,
		targetCategoryId,
		sourceContentOrderInf,
		targetContentOrderInf
	);
};

export const modifyCategoriesOrder = async (sourceOrderInf, targetOrderInf) => {
	return await ordersDao.modifyCategoriesOrder(sourceOrderInf, targetOrderInf);
};
