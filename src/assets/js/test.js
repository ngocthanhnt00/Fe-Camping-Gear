const express = require('express');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;
app.listen(`Server Run With PORT ${PORT}`)