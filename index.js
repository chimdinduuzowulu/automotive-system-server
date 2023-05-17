const express = require('express');
//
const cors = require('cors');
//
const app = express();
app.use(cors());
//
app.use(express.json());
//
const db = require('./models');
//
const authRoute = require('./routes/authRoute');
app.use('/auth', authRoute);
//
const mechanicRoute = require('./routes/mechanicRoute');
app.use('/mechanic', mechanicRoute);
//
const requestRoute = require('./routes/userRequestsRoute');
app.use('/request', requestRoute);
//
db.sequelize
  .sync()
  .then(() => console.log('server is running on port 3001'))
  .catch((e) => console.log(e));
//
app.listen(3001);
