import express from 'express';
import pingRouter from './pingRouter.js';
import contentsRouter from './contentsRouter.js';
import categoriesRouter from './categoriesRouter.js';
import ordersRouter from './ordersRouter.js';

const router = express.Router();

router.use('/ping', pingRouter);
router.use('/contents', contentsRouter);
router.use('/categories', categoriesRouter);
router.use('/orders', ordersRouter);

export default router;
