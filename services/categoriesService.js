import * as categoriesDao from '../models/categoriesDao.js';

export const getAllCategoriesAndContents = async () => {
	return await categoriesDao.getAllCategoriesAndContents();
};

export const addCategory = async () => {
	return await categoriesDao.addCategory();
};

export const modifyCategoryName = async (id, name) => {
	categoriesDao.modifyCategoryName(id, name);
};

export const removeCategory = async (id) => {
	categoriesDao.removeCategory(id);
};
