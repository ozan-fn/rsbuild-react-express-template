import express from 'express';
import healthRouter from './routes/health.routes';
import helloRouter from './routes/hello.routes';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/health', healthRouter);
app.use('/api', helloRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});
