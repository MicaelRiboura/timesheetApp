const express = require('express');
var cors = require('cors')
require('./database');
const passport = require('passport');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(routes);

app.listen(3333, () => console.log('🔥 Server is running...'));