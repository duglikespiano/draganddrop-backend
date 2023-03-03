import { myDataSource } from '../database/dataBase.js';

export const addContent = async (categoryId, newContentText) => {
	return await myDataSource
		.execute(
			`
		INSERT INTO content (text, category_id, orderInf)
		VALUES ((?),(?), (IFNULL((SELECT orderInf FROM (SELECT MAX(orderInf)+1 AS orderInf FROM content WHERE category_id = (?)) as orderInf),1)))
	`,
			[newContentText, categoryId, categoryId]
		)
		.then((result) => {
			return result[0].insertId;
		})
		.then((insertId) => {
			return myDataSource.execute(
				`SELECT * FROM content WHERE id = ${insertId}`
			);
		})
		.then((result) => {
			return result[0][0];
		});
};

export const modifyContent = async (id, text) => {
	await myDataSource.execute(
		`
	UPDATE content SET text = (?) WHERE id = (?)`,
		[text, id]
	);
};

export const removeContent = async (id) => {
	await myDataSource
		.execute(
			`SELECT content.id, content.text, content.orderInf, content.category_id FROM content 
				LEFT JOIN category 
				ON content.category_id = category.id
				WHERE content.id = ${id}
      `
		)
		.then((result) => {
			return {
				id: result[0][0].id,
				categoryId: result[0][0].category_id,
				orderInf: result[0][0].orderInf,
			};
		})
		.then((data) => {
			myDataSource.execute(
				`UPDATE content SET orderInf = orderInf -1 WHERE orderInf > ${data.orderInf} AND content.category_id = ${data.categoryId}`
			);
			return data.id;
		})
		.then((id) => myDataSource.execute(`DELETE FROM content WHERE id = ${id}`));
};
