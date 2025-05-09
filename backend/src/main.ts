import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import fragranceRouter from "./routes/fragrance.route";

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}));

app.use(json());

app.use('/api', fragranceRouter);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});


export default app;