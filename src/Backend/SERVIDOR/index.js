var express = require("express");
var app = express();
var port = process.env.port || 3000;
var hostname = "localhost";
const json = '{"nome": "william","sobrenome":"silva","altura":1.70}';
var objeto = JSON.parse(json);

app.get("/teste", function(req, res) {
    var nome = req.query.nome;
    res.send("Hello!" + objeto.nome + objeto.sobrenome + objeto.altura);
    console.log("passei aqui!");
});

app.get("/teste1", function(req, res) {
    res.send("Hello denovo!");
    console.log("passei aqui oops!");
});

app.listen(port, hostname, () => {
    console.log("servidor https://"+ hostname + ":" + port);
});