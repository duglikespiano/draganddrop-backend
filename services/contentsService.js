import * as contentsDao from '../models/contentsDao.js';

export const addContent = async (categoryId, newContentText) => {
	return await contentsDao.addContent(categoryId, newContentText);
};

export const modifyContent = async (id, text) => {
	await contentsDao.modifyContent(id, text);
};

export const removeContent = async (id) => {
	await contentsDao.removeContent(id);
};
