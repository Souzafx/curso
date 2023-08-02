const express = require('express'); // Aqui você está importando o módulo "express" que é o principal componente do framework Express. Ele permite que você crie e configure um servidor web de maneira fácil e rápida.
const app = express(); // Depois de importar o módulo "express", você cria uma instância do aplicativo Express chamada app. Essa instância é usada para configurar e gerenciar as rotas, middlewares e outras funcionalidades do servidor.
const handlebars = require('express-handlebars'); // Agora, você está importando o módulo "express-handlebars", que é um mecanismo de visualização

const port = 8080; // Nesse código, você está declarando uma constante chamada "port" e atribuindo o valor 8080 a ela.

let listaUsuarios = [
    { nome: "David", sobrenome: "Souzza", email: "Dsouzza@uol.com.br" }
]
// let é usada para criar uma variável no JavaScript que pode ser reatribuída com listaUsuarios é uma variável que foi declarada.

const viewFolder = 'views'; // Nesse código, uma constante chamada viewFolder é declarada e recebe o valor 'views'.

app.engine('handlebars', handlebars.engine()); // você está configurando o mecanismo de visualização (template engine) Handlebars em um aplicativo Express.
app.set('views', viewFolder); // você está usando o método app.set() do Express para configurar a variável de ambiente "views" para o valor contido na constante viewFolder.
app.set('view engine', 'handlebars'); // você está usando o método app.set() do Express para configurar o mecanismo de visualização padrão para Handlebars em seu aplicativo.

app.use(express.json()) // Nesse código, você está usando o middleware express.json() no seu aplicativo Express.
// Quando você usa app.use(express.json()), você está dizendo ao Express que, antes de passar a solicitação para a rota correspondente, ele deve verificar se o corpo da solicitação contém dados em formato JSON e, se houver, analisá-los e colocá-los no objeto req.body.
app.use(express.urlencoded({extended:true})) // Quando você usa app.use(express.urlencoded({ extended: true })), você está dizendo ao Express que, antes de passar a solicitação para a rota correspondente, ele deve analisar os dados enviados no corpo da solicitação (normalmente de um formulário HTML)
// Isso é útil quando você envia dados de um formulário HTML para o servidor em solicitações POST, PUT ou PATCH, por exemplo. 
// O middleware express.urlencoded() permite que você acesse esses dados enviados pelo cliente no objeto req.body para que você possa processá-los no servidor.

app.get('/', (req, res) => { // você está definindo uma rota GET no seu aplicativo Express para o caminho raiz ("/").
    console.log("Recebida requisição GET"); // Você pode usar o console.log() para exibir outras informações, variáveis ou propriedades do objeto de solicitação (req)
    // Lembre-se de que o console.log() é uma ferramenta valiosa para depurar e inspecionar o comportamento do seu aplicativo, mas é importante removê-lo ou comentá-lo em produção, pois pode poluir os logs e consumir recursos desnecessários do servidor.

    let posicaoArray = Math.floor(Math.random() * 3)
    // Math.floor(Math.random() * 3): A função Math.floor() arredonda para baixo o número decimal resultante da multiplicação anterior, transformando-o em um número inteiro entre 0 e 2 (inclusive). 
    // Isso significa que posicaoArray pode ser 0, 1 ou 2.

    let operador = { 
        name: listaUsuarios[posicaoArray].nome,
        lastname: listaUsuarios[posicaoArray].sobrenome
    }
    // Nesse código, você está criando um objeto chamado operador que possui duas propriedades: name e lastname.

    //res.send(testUser)
    res.render('index', { operador: operador });
    // res.render() é um método do objeto res (response) do Express, que é usado para renderizar um modelo e enviar a resposta HTML gerada de volta ao cliente.
    // index': O primeiro argumento é o nome do modelo que você deseja renderizar.
    // { operador: operador }: O segundo argumento é um objeto que contém os dados que você deseja passar para o modelo durante a renderização.
});

app.get('/funcionarios/', (req, res) => { // No código que você apresentou, você está definindo uma rota GET no seu aplicativo Express para o caminho "/funcionarios/".
    console.log("Recebida requisição GET de funcionarios"); 
    // Adicionando o console.log() na função de retorno de chamada, você pode verificar no servidor quando as solicitações GET para "/funcionarios/" estão sendo feitas.

    let cargo = req.query.cargo; // Nesse código, você está acessando o parâmetro de consulta "cargo" da solicitação HTTP GET usando o objeto req.query do Express.

    let operador = { 
        name: "David",
        lastname: "Souzza",
    } // você está criando um objeto chamado operador com duas propriedades: name e lastname.

    res.render('funcionarios', { 
        operador: operador,
        isAdmin: cargo === "admin",
        usuarios: listaUsuarios
    }); // você está renderizando o modelo "funcionarios" e passando três conjuntos de dados como variáveis para serem utilizadas na renderização.
});

app.get('/funcionarios/cadastro', (req, res) => { // No código que você apresentou, você está definindo uma rota GET no seu aplicativo Express para o caminho "funcionarios/cadastro/"
    console.log("Recebida requisição GET de cadastro"); // Adicionando o console.log() na função de retorno de chamada, você pode verificar no servidor quando as solicitações GET para "/funcionarios/cadastro/" estão sendo feitas.

    res.render('cadastro'); // você está renderizando o modelo "cadastro"
});


app.get('/api/', (req, res) => { // No código que você apresentou, você está definindo uma rota GET no seu aplicativo Express para o caminho "/api/".
    console.log("Recebida via API requisição GET");// Adicionando o console.log() na função de retorno de chamada, você pode verificar no servidor quando as solicitações GET para "/api/" estão sendo feitas.

    let posicaoArray = Math.floor(Math.random() * 3)
    // Math.floor(Math.random() * 3): A função Math.floor() arredonda para baixo o número decimal resultante da multiplicação anterior, transformando-o em um número inteiro entre 0 e 2 (inclusive). 
    // Isso significa que posicaoArray pode ser 0, 1 ou 2.

    res.send(listaUsuarios[posicaoArray])
    // res.send(): É um método do objeto res (response) do Express, usado para enviar uma resposta ao cliente.
    // listaUsuarios[posicaoArray]: Aqui você está acessando o objeto de usuário que está na posição posicaoArray do array listaUsuarios.
    // O posicaoArray foi definido anteriormente como um número inteiro aleatório entre 0 e o comprimento do array listaUsuarios - 1.
});

app.post('/api/usuario', (req, res) => { // Nesse trecho de código, você está definindo uma rota POST no seu aplicativo Express para o caminho "/api/usuario".
    const { nome, sobrenome, email } = req.body; 
    // Nesse trecho de código, você está usando a desestruturação do JavaScript para extrair os campos "nome", "sobrenome" e "email" do objeto req.body da solicitação HTTP.
    // req.body: É uma propriedade do objeto de solicitação req (request) do Express que contém os dados enviados pelo cliente no corpo da solicitação, como JSON, formulário ou outros formatos.
    // const { nome, sobrenome, email }: Usando a desestruturação, estamos criando três variáveis locais (nome, sobrenome e email) e atribuindo a elas os valores correspondentes dos campos do objeto req.body.
    
    const novoFuncionario = { nome, sobrenome, email}
    // Nesse trecho de código, você está criando um novo objeto chamado novoFuncionario usando a desestruturação para atribuir os valores das variáveis nome, sobrenome e email a propriedades com os mesmos nomes no objeto.
    // nome, sobrenome e email: São as variáveis que você criou anteriormente usando a desestruturação do objeto req.body.
    // novoFuncionario: É um novo objeto que está sendo criado, contendo as propriedades "nome", "sobrenome" e "email". As propriedades estão sendo preenchidas com os valores das variáveis nome, sobrenome e email.

    listaUsuarios.push(novoFuncionario)
    // você está adicionando o objeto novoFuncionario ao array listaUsuarios usando o método push()
    // listaUsuarios: É um array que contém objetos de usuários, conforme definido anteriormente. Por exemplo:
    // novoFuncionario: É o novo objeto de funcionário que foi criado usando a desestruturação dos valores recebidos na solicitação.
    // O método push() é um método padrão de arrays em JavaScript que permite adicionar elementos no final do array. Nesse caso, ele está sendo usado para adicionar o objeto novoFuncionario ao array listaUsuarios, fazendo com que ele se torne o último elemento do array.
    // Após executar o push(), o array listaUsuarios será atualizado e conterá o novo funcionário adicionado:
 
    let operador = {
        name: novoFuncionario.nome,
        lastname: novoFuncionario.sobrenome
    } // você está criando um objeto chamado operador com duas propriedades: name e lastname.

    res.render('index', {
        operador: operador,
        // Nesse trecho de código, você está renderizando o modelo "index" e passando o objeto operador como variável para ser usada na renderização.
        // Com essa renderização, o modelo "index.handlebars" (ou outro, dependendo do mecanismo de visualização configurado) será processado com a variável operador passada, e poderá usar os dados do objeto operador para gerar a resposta HTML.
    }) 
    
});

const server = app.listen(port, () => console.log("Escutando na porta " + port));
// Nesse trecho de código, você está iniciando o servidor Express para escutar na porta especificada.
// app.listen(): Esse é um método do objeto app que inicia o servidor Express e começa a escutar as solicitações HTTP na porta especificada.
// port: É a variável que contém o número da porta em que você deseja que o servidor escute as solicitações HTTP.
// (port, () => console.log("Escutando na porta " + port)): Aqui você está passando dois argumentos para o método app.listen().