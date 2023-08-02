const express = require('express'); // Aqui você está importando o módulo "express" que é o principal componente do framework Express. Ele permite que você crie e configure um servidor web de maneira fácil e rápida.
const app = express(); // Depois de importar o módulo "express", você cria uma instância do aplicativo Express chamada app. Essa instância é usada para configurar e gerenciar as rotas, middlewares e outras funcionalidades do servidor.
const port = 8080; // Você está definindo a porta na qual o servidor irá escutar
const handlebars = require('express-handlebars'); // Agora, você está importando o módulo "express-handlebars", que é um mecanismo de visualização

const items = [ // declaração de uma constante chamada "items" que é um array (lista) de objetos JavaScript.
  { nome: 'item1', preco: 10 },
  { nome: 'item2', preco: 20 },
  { nome: 'item3', preco: 30 },
  { nome: 'item4', preco: 40 },
];

const testUser = { // declaração de uma constante chamada "testUser". Essa constante é um objeto JavaScript que representa informações de um usuário fictício.
  nome: 'Diogo',
  sobrenome: 'Magliano',
  admin: true
};

const data = { // declara uma constante chamada "data" que é um objeto JavaScript. Esse objeto parece estar sendo construído com base em informações de um objeto chamado "testUser" e um array chamado "items".
  nome: testUser.nome,
  sobrenome: testUser.sobrenome,
  admin: testUser.admin,
  items: items,
};

app.engine('handlebars', handlebars.engine()) 
// Esta linha configura o mecanismo de visualização Handlebars no aplicativo Express. A função app.engine() é usada para definir um mecanismo de modelo personalizado. 
app.set('view engine', 'handlebars');
// Esta linha define o mecanismo de visualização padrão para o aplicativo Express. A função app.set() é usada para configurar as variáveis de ambiente do aplicativo Express.

app.get('/', (req, res) => { //  Isso define uma rota para lidar com solicitações GET na rota raiz do servidor ("/").
      // (req, res) => { ... }: Este é o callback da rota.
  res.render('index', data); // Dentro do callback, essa linha chama o método render do objeto res, que é fornecido pelo Express.
});

app.listen(port, () => { // listen é usado para iniciar o servidor Express e começar a ouvir as solicitações HTTP na porta especificada.
  console.log(`Servidor rodando na porta: ${port}`);
});
// console.log() é uma função integrada do JavaScript que exibe mensagens ou valores no console do navegador ou no terminal do Node.js, dependendo do ambiente em que o código está sendo executado.