# [Krakend] API Gateway — Agregando e modificando responses

Artigo sobre agregação e modificação de responses utilizando API Gateway Krakend

Medium [link](https://elvis-dias.medium.com/krakend-api-gateway-agregando-e-modificando-responses-33f7715d73eb).

## Api user-manager

Api http fake para busca de usuários. No diretório user-manager-service, execute o comando abaixo para iniciar

```bash
npm start

> user-manager-service@1.0.0 start
> node src/server.js

Api user-manager listening on port 3000
```
Serviço configurado para realizar bind na porta 3000. Exemplo de GET abaixo:
```bash
$ curl -s --request GET 'http://localhost:3000/v1/user-manager/users/161' | json_pp                                             
{
   "address" : "71 Bobwhite Road",   
   "email" : "rmcshea4g@youtube.com",
   "first_name" : "Ransom",
   "gender" : "Agender",
   "id" : 161,
   "last_name" : "McShea"
}
```



## Api order-manager

Api http fake para busca de pedidos de usuários. No diretório order-manager-service, execute o comando abaixo para iniciar

```bash
npm start

> order-manager-service@1.0.0 start
> node src/server.js

Api order-manager listening on port 3001
```

Serviço configurado para realizar bind na porta 3001. Exemplo de GET abaixo:
```bash
$ curl -s --request GET 'http://localhost:3001/v1/order-manager/users/161' | json_pp
[
   {
      "count_items" : 15,     
      "orderId" : 481,        
      "total_price" : 533.3,  
      "userId" : 161
   },
   {
      "count_items" : 28,     
      "orderId" : 482,        
      "total_price" : 1867.99,
      "userId" : 161
   },
   {
      "count_items" : 21,
      "orderId" : 483,
      "total_price" : 375.1,
      "userId" : 161
   }
]

```
## Executando Krakend
Primeiramente inicie as APIs order-manager e user-manager.

Acessando o diretório krakend-config execute o comando abaixo para iniciar o container utilizando a configuração de agragação de responses

```bash
$ docker run -it --volume /$(pwd):/etc/krakend --add-host kubernetes.docker.internal:host-gateway -p 8080:8080 devopsfaith/krakend run -c agregacao.json
```

Para iniciar o container utilizando a configuração de modificação de responses utilize o comando abaixo

```bash
$ docker run -it --volume /$(pwd):/etc/krakend --add-host kubernetes.docker.internal:host-gateway -p 8080:8080 devopsfaith/krakend run -c modificacao.json
```