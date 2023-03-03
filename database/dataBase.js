import mysql from 'mysql2';
import { database, host, user, password } from '../env.js';

const pool = mysql.createPool({
	database,
	host,
	user,
	password,
});

export const myDataSource = pool.promise();
myDataSource.getConnection().then(() => console.log('database connected!'));
