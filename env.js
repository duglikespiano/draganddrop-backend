import dotenv from 'dotenv';
dotenv.config();

export const port = process.env.PORT;
export const database = process.env.DB_DATABASE;
export const host = process.env.DB_HOST;
export const user = process.env.DB_USERNAME;
export const password = process.env.DB_PASSWORD;
