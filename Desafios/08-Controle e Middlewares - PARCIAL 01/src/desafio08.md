## Controle e Middlewares - 08 03.06.2023
Folder com arquivos da entrega parcial do desafio final - aula 08

- Servidor com express que roda na porta 8080:

- Product:
  - Id : String / Number
  - Titulo : String
  - Descricao : String
  - Code : String
  - Preco : Numbner
  - Status : Boolean
  - Estoque : Number
  - Categoria : String
  - Thumbnails : [String] (Opcional)

- Guardar em um arquivo products.json (usar o modulo fs)

- Cart:
  - Id : String / Number
  - Products : [ { Produto.id , Quantidade } ]

- Guardar em um arquivo carts.json (usar o modulo fs)

- Rotas:
  - /api/products/ (pid = product id)
    POST "/" : adicionar um novo produto.
    PUT "/:pid" : atualizar um produto (nunca alterar id)
    DELETE "/:pid" : deletar o produto com id indicado.

  - /api/carts/ (cid = cart id)
    POST "/" : cria um novo carrinho com um id (cid) e um array de produtos [ {pid , qtd} ]
    GET "/:cid" : retorna a lista de produtos que pertencem a aquele carrinho.
    POST "/:cid/products/:pid" : adicionar ao carrinho o produto com id = pid, adicionando 1 unidade.
    e caso já exista um produto com esse id no carrinho, ele deve incrementar a quantidade.

    Exemplo const mouse = {id:1, titulo:mouse, descriç}

 

       [ { Produto.id , Quantidade } ]
    
        let produto = 
        {
        id : 1
        titulo : "Mouse"
        descricao : "Mouse Logitech"
        code : "MX-150"
        preco : 75.00
        status : "true" (inicialmente sempre true)
        estoque : 10
        categoria : "Informatica"
        Thumbnails : [
                      "site/endereco/imagem1.png",
                      "site/endereco/imagem2.png",
                      "site/endereco/imagem3.png"
                      ] (opcional)
    		  }
    
    	  let carrinho = 
    	  {
    	    id:10,
    	    listaProdutos: [
    	      {pid:1 , qtd: 2},
    	      {pid:2, qtd: 3}
    	    ]
    	  }
