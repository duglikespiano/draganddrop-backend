import express from 'express';
import * as categoriesController from '../controllers/categoriesController.js';
const router = express.Router();

router.get('/all', (req, res) => {
	categoriesController.getAllCategoriesAndContents(req, res);
});

router.post('/', (req, res) => {
	categoriesController.addCategory(req, res);
});

router.put('/', (req, res) => {
	categoriesController.modifyCategoryName(req, res);
});

router.delete('/', (req, res) => {
	categoriesController.removeCategory(req, res);
});

export default router;
