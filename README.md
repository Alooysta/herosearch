# Projeto Marvel estágio BASF - [Link Site](https://marvelappsearch.online/marvel-app/).
Projeto FrontEnd e BackEnd criado por Guilherme de Sousa Santos usando [React](https://react.dev) e [Node.js](https://nodejs.org/en).
- Importante: Devido ao uso de server de Hosting grátis, o servidor fecha automaticamente após 15 minutos sem nenhum request, então, ao entrar no site e fazer a primeira busca, espere 30s~90s e ela iniciará o server automaticamente!

## Motivação

Com os pedidos especificados no arquivo "Proposta front-end" enviado aos participantes no e-mail, decidi corrensponder as exigências e ir além do pedido, criando uma "Search Engine" da Marvel, com uma aplicação Front End + Back End.

## Funcionamento
### Página Principal.
![site](https://i.imgur.com/VIiwAmm.png)
- Na página principal temos uma barra de Pesquisa e o texto 'Personagens Marvel', buscando o nome de um personagem (**EM INGLÊS**) ele nos dará uma lista dos Heróis com o nome pesquisado:
![herois](https://i.imgur.com/6iagDDN.jpeg)
- Quando um personagem é selecionado via um Click do usuário, ele nos levará a seguinte página:
![sobre](https://i.imgur.com/3nSIcqZ.png)
- Nos mostrando uma **Foto do Herói** selecionado, o seu **Nome**, uma breve **Descrição do Personagem** e os **Quadrinhos** em que ele participa, além de um botão pra voltar à **Página Inicial**. (Devido a uma limitação da API o máximo de informações que podem ser adquiridas é 20, tanto pra personagens tanto para os quadrinhos)
- Clicando no nome de um dos quadrinhos ele nos levará para a sua respectiva página no google.
![google](https://i.imgur.com/JhHxfYj.gif)

## Bibliotecas Utilizadas. 

- Lado do Server.

- [Axios](https://www.npmjs.com/package/axios) - Uma biblioteca que permite uma integração do seu projeto React para qualquer serviço de API disponível.
- [Body-parser](https://www.npmjs.com/package/body-parser) - Uma biblioteca 'npm' usada para processar dados enviados por meio de um corpo de solicitação HTTP.
- [Cors](https://www.npmjs.com/package/cors) - O CORS é uma especificação do W3C e faz uso de headers do HTTP para informar aos navegadores se determinado recurso pode ser ou não acessado(mensagens de erro detalhadas).
- [Cypto-js](https://www.npmjs.com/package/crypto-js) - Usado pra criar o md5 hash usado pra pegar os dados da API.
- [Dotenv](https://www.npmjs.com/package/dotenv) - Processa os dados inseridos no .env, assim as keys da API ficam escondidas! (Pra não cair nas mãos erradas).
- [Express](https://www.npmjs.com/package/express) - O Express é um framework JavaScript que facilita a criação de aplicativos web utilizando o Node. js.
- [Nodemon](https://www.npmjs.com/package/nodemon) - Automaticamente reinicia o app node quando a mudança dos arquivos são reconhecidas nos diretórios.

- Lado do Client.
- [Tailwind](https://tailwindcss.com) - Tailwind é um framework CSS que permite você criar layouts para suas aplicações web utilizando sua estrutura.
- [Axios](https://www.npmjs.com/package/axios) - Previamente explicado.


## Website

O aplicativo roda no seguinte link: [marvelappsearch.online/marvel-app](http://marvelappsearch.online/marvel-app/) .
- O hosting do Front End foi feita no [Hostinger](https://www.hostinger.com.br).
- Já o hosting do Back End foi feita no [Render](https://render.com).
- **Importante:** Devido ao uso de server de Hosting grátis, o servidor fecha automaticamente após 15 minutos sem nenhum request, então, ao entrar no site e fazer a primeira busca, espere 30s~90s e ela iniciará o server automaticamente!

  


