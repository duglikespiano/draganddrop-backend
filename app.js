import express from 'express';
import http from 'http';
import cors from 'cors';
import router from './routers/index.js';
import { port } from './env.js';

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));
app.use(router);

const serverStart = () => {
	server.listen(port, () => {
		console.log(`server is listening on port ${port}!`);
	});
};

export default serverStart;
