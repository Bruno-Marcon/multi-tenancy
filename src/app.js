const express = require('express');
const bodyParser = require('body-parser');
const itemsRouter = require('./routes/itens');

const app = express();
app.use(bodyParser.json());

app.use('/itens', itemsRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
