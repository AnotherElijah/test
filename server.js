const express = require('express');
const connectDB = require('./config/db');
const app = express();
const router = require('./user.controller');

app.use('/', router);

connectDB();

const PORT = process.env.PORT||5000;

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));
