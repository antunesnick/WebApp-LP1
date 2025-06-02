const express = require('express');
const app = express();

const port = 3000;

app.use(express.urlencoded({extended: true}));


app.use(express.static("../../exposto"));



app.listen(port, () => {
    console.log(`Server rodando em ${port}`)
});