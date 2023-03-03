import { myDataSource } from '../database/dataBase.js';

export const modifyContentsOrderInSameCategory = async (
	sourceOrderInf,
	targetOrderInf
) => {
	await myDataSource
		.execute(
			`SELECT * FROM content WHERE orderInf = ${sourceOrderInf} OR orderInf = ${targetOrderInf}`
		)
		.then((result) => {
			return result[0];
		})
		.then((data) => {
			const sourceId = data[0].id;
			const sourceOrderInf = data[0].orderInf;
			const targetId = data[1].id;
			const targetOrderInf = data[1].orderInf;
			myDataSource.execute(
				`UPDATE content SET orderInf = ${sourceOrderInf} WHERE id = ${targetId}`
			);
			return { sourceId, targetOrderInf };
		})
		.then((data) =>
			myDataSource.execute(
				`UPDATE content SET orderInf = ${data.targetOrderInf} WHERE id = ${data.sourceId}`
			)
		);
};

export const modifyContentsOrderAmongDifferentCategories = async (
	sourceContentId,
	sourceCategoryId,
	targetCategoryId,
	sourceContentOrderInf,
	targetContentOrderInf
) => {
	await myDataSource
		.query(
			`UPDATE content SET orderInf = orderInf +1 WHERE category_id =${targetCategoryId} AND orderInf >= ${targetContentOrderInf}`
		)
		.then(() => {
			return {
				sourceCategoryId,
				sourceContentOrderInf,
			};
		})
		.then((data) => {
			myDataSource.query(
				`UPDATE content SET orderInf = orderInf-1 WHERE category_id =${data.sourceCategoryId} AND orderInf >= ${data.sourceContentOrderInf}`
			);
			return {
				targetContentOrderInf,
				sourceContentId,
			};
		})
		.then((data) => {
			myDataSource.query(
				`UPDATE content SET orderInf=${data.targetContentOrderInf} WHERE id=${data.sourceContentId}`
			);
			return { targetCategoryId, sourceContentId };
		})
		.then((data) => {
			myDataSource.query(
				`UPDATE content SET category_id =${data.targetCategoryId} WHERE id = ${data.sourceContentId}`
			);
		});
};

export const modifyCategoriesOrder = async (sourceOrderInf, targetOrderInf) => {
	await myDataSource
		.execute(
			`SELECT * FROM category WHERE orderInf =${sourceOrderInf} OR orderInf =${targetOrderInf}`
		)
		.then((result) => {
			return result[0];
		})
		.then((data) => {
			const sourceId = data[0].id;
			const sourceOrderInf = data[0].orderInf;
			const targetId = data[1].id;
			const targetOrderInf = data[1].orderInf;
			myDataSource.execute(
				`UPDATE category SET orderInf = ${sourceOrderInf} WHERE id = ${targetId}`
			);
			return { sourceId, targetOrderInf };
		})
		.then((data) =>
			myDataSource.execute(
				`UPDATE category SET orderInf = ${data.targetOrderInf} WHERE id = ${data.sourceId}`
			)
		);
};
