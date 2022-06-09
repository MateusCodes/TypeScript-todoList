interface Pessoas {
  nome: string,
  idade: number,
  profissao: Profissao
}

enum Profissao {
  Atriz,
  Padeiro
}


let pessoa1 = {} as Pessoas;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Atriz



let pessoa2: Pessoas = {
  nome: "Roberto",
  idade: 20,
  profissao: Profissao.Padeiro
};



let pessoa3: {nome: string, idade: number, profissao: Profissao} = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};



let pessoa4: Pessoas = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}