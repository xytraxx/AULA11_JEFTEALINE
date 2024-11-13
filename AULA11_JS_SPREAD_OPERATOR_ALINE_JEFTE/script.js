//spread operator
let primeiros = [1, 2, 3];

let numeros = [primeiros, 4, 5, 6];

let numeros2 = [...primeiros, 4, 5, 6];

console.log(numeros);
console.log(numeros2);

//spredando num objeto
let pessoa = {
  nome: "Marcelo",
  idade: 54,
  cargo: "profssor",
};

let dadosPessoa = {
  ...pessoa,
  status: "ativo",
  cidade: "Campo Largo",
};

console.log(dadosPessoa);
console.log(dadosPessoa.cargo);

//exemplificando de uma forma mais realista

function novoUsuario(info) {
  //console.log(info);
  let dados = {
    ...info,
    status: "ativo",
    inicio: "20/09/2024",
    codigo: "123",
  };
  console.log(dados);
}

novoUsuario({ nome: "Jefte", sobreNome: "Rico", cargo: "estagiário" });
