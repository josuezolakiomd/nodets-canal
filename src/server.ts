import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import * as mainRoutes from './routes/index';

// Loading the environment variables
dotenv.config();

// Creating the server
const server = express();

// Setting up the view engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// Setting up the static files
server.use(express.static(path.join(__dirname, '../public')));

// Setting up the routes
server.use(mainRoutes.default);

server.use((req: Request, res: Response) => {
  res.render('pages/404');
})


// Starting the server
server.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});