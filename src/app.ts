import express from 'express';
import bodyParser from 'body-parser';
import questionRoutes from './routes/questionRoutes';

const app = express();

app.use(bodyParser.json());

// Serve static files from the uploads folder
app.use('/uploads', express.static('uploads'));

app.use('/api', questionRoutes);

export default app;
