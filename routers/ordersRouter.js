import express from 'express';
import * as ordersController from '../controllers/ordersController.js';
const router = express.Router();

router.put('/contents', (req, res) => {
	ordersController.modifyContentsOrderInSameCategory(req, res);
});

router.patch('/contents', (req, res) => {
	ordersController.modifyContentsOrderAmongDifferentCategories(req, res);
});

router.put('/categories', (req, res) => {
	ordersController.modifyCategoriesOrder(req, res);
});

export default router;
