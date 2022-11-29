//- Creation de l'objet app avec toutes ses configs, pourra etre importe ailleurs a l'aide du module app

const express = require("express");
const cors = require('cors');

const app = express();
app.use(express.json());//TODO ? 
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

module.exports = app;