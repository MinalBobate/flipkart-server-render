import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Connection from './database/db.js';
import { v4 as uuid } from 'uuid';



const app = express();
dotenv.config();


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors());

import Product from './model/productSchema.js';
import Cart from './model/cartSchema.js';
import User from './model/userSchema.js';
import Routes from './routes/route.js';

app.use('/',Routes)


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.5k0ziar.mongodb.net/Database2?retryWrites=true&w=majority`


Connection(URL);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

