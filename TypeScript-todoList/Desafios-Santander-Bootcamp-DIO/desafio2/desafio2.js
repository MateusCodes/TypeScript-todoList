"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Atriz;
let pessoa2 = {
    nome: "Roberto",
    idade: 20,
    profissao: Profissao.Padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
