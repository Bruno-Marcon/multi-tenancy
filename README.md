# Sobre

O projeto simula a implementação de multi-tenancy em um único banco de dados, com o objetivo de compreender seu funcionamento e possíveis aplicações práticas. Multi-tenancy é uma arquitetura onde múltiplos tenants compartilham uma mesma instância de software.

A separação dos tenents dentro do database, se dá com uma coluna id, representando outros tenents.

# Execução

Basta executar o comando 'node .\src\app.js', logo o server estará rodando na porta 3000

# Testes

Para testar é necessário utilizar postman ou thunderclient, fazendo um envio http para as seguintes rotas:

# POST
http://localhost:3000/itens/ enviando um json com POST. Logo será cadastrado no banco as informações enviadas.

````
```
    {
        "name": "Item de Teste",
        "tenant_id": "1"
    }

```
````
# GET
para buscar é necessário usar o GET para a rota http://localhost:3000/itens/, serão apresentados todos os itens cadastrados no banco de dados para a tabela itens.

````
```
    {
        "id": 22,
        "name": "Item de Teste",
        "tenant_id": 1
    },
```
````

Caso a busca seja para um tenent especifico deve fornecer o id do tenent no GET, dessa forma: http://localhost:3000/itens/1
