import express from 'express';
import contentsRouter from './contentsRouter.js';
import categoriesRouter from './categoriesRouter.js';
import ordersRouter from './ordersRouter.js';

const router = express.Router();

router.use('/contents', contentsRouter);
router.use('/categories', categoriesRouter);
router.use('/orders', ordersRouter);

export default router;
