import { myDataSource } from '../database/dataBase.js';

export const getAllCategoriesAndContents = async () => {
	return await myDataSource
		.execute(
			`
	SELECT category.id, category.name, category.orderInf, content FROM category
		LEFT JOIN (
			SELECT
				content.category_id,
				JSON_ARRAYAGG(
				JSON_OBJECT(
        	"id" , content.id,
        	"text", content.text,
            "orderInf", content.orderInf
        	)
        ) AS content
		FROM (SELECT * FROM content ORDER BY orderInf) AS content
		GROUP BY content.category_id
    	) AS content
    ON category.id = content.category_id
    GROUP BY category.id
    ORDER BY category.orderInf
	`
		)
		.then((data) => {
			data = data[0];
			return data;
		})
		.then((data) => {
			data.forEach((elements) => {
				if (elements.content === null) {
					elements.content = [];
				}
				if (!!elements.content) {
					elements.content.sort(function (a, b) {
						return a.orderInf - b.orderInf;
					});
				}
			});
			return data;
		});
};

export const addCategory = async () => {
	return myDataSource
		.execute(
			`INSERT INTO category (name, orderInf)
		VALUES ('Untitled', (SELECT orderInf FROM (SELECT MAX(orderInf)+1 AS orderInf FROM category) AS orderInf))`
		)
		.then((result) => {
			return result[0].insertId;
		})
		.then((insertId) => {
			return myDataSource.execute(`
		SELECT category.id, category.name, category.orderInf, NULLIF(1,1) as content FROM category
		WHERE id = ${insertId}`);
		})
		.then((data) => {
			data = data[0];
			data[0].content = [];
			return data[0];
		});
};

export const modifyCategoryName = async (id, name) => {
	await myDataSource.execute(
		`UPDATE category 
     SET name = (?)
      WHERE id = (?)`,
		[name, id]
	);
};

export const removeCategory = async (id) => {
	await myDataSource
		.execute(`SELECT * FROM category WHERE id = (?)`, [id])
		.then((data) => {
			return data[0][0];
		})
		.then((data) => {
			myDataSource.execute(
				`UPDATE category SET orderInf = orderInf-1 WHERE orderInf >= ${data.orderInf}`
			);
			return data;
		})
		.then((data) => {
			myDataSource.execute(
				`DELETE FROM content WHERE category_id = ${data.id}`
			);
			return data;
		})
		.then((data) => {
			myDataSource.execute(`DELETE FROM category WHERE id = ${data.id}`);
		});
};
