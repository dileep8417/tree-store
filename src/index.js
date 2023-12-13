const express = require('express');
const treeRouter = require('./api/tree');

const port = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/tree', treeRouter);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
