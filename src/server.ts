import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

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

// Starting the server
server.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});