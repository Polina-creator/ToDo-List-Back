import express from 'express';
import serverRoutes from './routes/servers.js';

const PORT = process.env.PORT ?? 3001;
const app = express();

app.use(serverRoutes);

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});