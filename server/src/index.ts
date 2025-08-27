import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import projectsRouter from './projects.routes';

const app = express();
app.use(cors({ origin: ['http://localhost:5173'] }));
app.use(express.json());

app.get('/health', (_req, res) => res.send('ok'));

app.use('/api/projects', projectsRouter);

const port = Number(process.env.PORT) || 4000;
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
