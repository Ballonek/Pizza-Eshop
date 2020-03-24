const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
require('./server/db/mongoose');
const userRouter = require('./server/routes/user.route');

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', userRouter);

app.listen(port, () => console.log(`Server is on ${port}`));