const express = require("express");
const app = express();
const requireDir = require("require-dir");

//instanciando o orm mongoose e realizando a conexão
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:17017/nodeapi", { useNewUrlParser: true });

//Require dir importando o diretorio dos models
requireDir("./src/models");

//rota
app.use("/api", require("./src/routes"));

app.listen(3000);
