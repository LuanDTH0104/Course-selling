//Import libraries
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const UserController = require('./Routes/UserController');
const db = require('./Database/DBConnection');
const CategoryController = require('./Routes/CategoryController');
const PostController = require('./Routes/PostController');

//Parser code
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Router
app.use('/hoc-vien', UserController);
app.use('/nganh-hoc', CategoryController);
app.use('/bai-viet', PostController);

// DB Connection
db.connect();

// Listen to port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


