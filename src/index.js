const express = require('express');
const route = require('./route');
const app = express();
app.use(express.json());
app.use(route);

app.listen(3333);