var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var hostname = "localhost";
const json = '{"nome":"Danilo", "sobrenome":"Santos", "idade":"23"}';
var objeto = JSON.parse(json);


app.get("/", function(req,res){
    var nome = req.query.nome;
    res.send("<h1>Olá pessoa: </h1>"+objeto.nome+" "+objeto.sobrenome+" "+objeto.idade);
    console.log("Passei aqui!");
});

app.listen(port, hostname, () => {
    console.log("Servidor http://"+hostname+":"+port);
});

app.get("/user", function(req,res){
    console.log("Enviei por Get");
    req.send(JSON.stringify({
        email:"danilapereirasantos0@gmail.com",
        senha:"232425"
    }));
});

app.post("/add", function(req,res){
    console.log("recebi um dado")
    console.log(re.body.email);
    console.log(req.body.senha);
    res.send("JSON recebido!")
});

app.get("/CadastroAluno", function(req,res){
    console.log("Enviei por Get");
    res.send(JSON.stringify({
        nomecompleto:"Danila pereira dos santos",
        CPF:"58673910-84",
        nascimento:25/05/1998,
        Curso:"Analise e desenvolvimento de sistemas",
        dataconclusao:01/01/2023,
        email:"danilapereirasantos0@gmail.com",
        senha:"232425"
    }));
});

app.get("/CadastroEmpresa", function(req,res){
    console.log("Enviei por Get")
    res.send(JSON.stringify({
    CNPJ:"45.697.836/0001-12",
    razaosocial:"recantodasideiasservicossociais",
    nomefantasia:"recantodasideias",
    CEP:"02378040",
    email:"recantodasideias@recantodasideias.com.br",
    senha:"232425"
}));
});

