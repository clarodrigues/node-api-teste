const express = require("express");
const app = express();
const requireDir = require("require-dir");

//instanciando o orm mongoose e realizando a conexão
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:17017/nodeapi", { useNewUrlParser: true });

//Require dir importando o diretorio dos models
requireDir("./src/models");

//Instanciando um Product
const Product = mongoose.model("Product");

app.get("/", (req, res) => {    
    return res.send("Hello Cláudio");
});

app.listen(3000);
