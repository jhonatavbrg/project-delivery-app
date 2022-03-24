# Habilidades

Nesse projeto, você deverá ser capaz de:

- Manter aderência do código à especificação. Seu programa deve se comportar como especificado no repositório, no [protótipo](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=0%3A1) e no Diagrama de ER;
- Manter a organização do seu código e a arquitetura geral da aplicação (tanto da API quando do front-end);
- Manter aderência ao padrão REST na API;
- Respeitar a estrutura do banco de dados. Sua implementação não deve adicionar ou remover tabelas, campos ou relacionamentos e sua API deve estar preparada para aproveitar essa estrutura por completo;
- Manter uma cobertura de testes. Seu código deve ser testável e possuir uma suíte de testes unitários e/ou de integração robusta e com alta cobertura.
- Implementar a funcionalidade de comunicação em tempo real, utilizando o socket.io.
- Manter aderência aos princípios SOLID;

---

## Scripts relevantes do `package.json` principal

**São os scripts da raiz do projeto (`./package.json`)** *(e não das aplicações individuais `./front-end/package.json` e `./back-end/package.json`)*:

- `start`: Limpa as portas `3000` e `3001` e simula a inicialização no avaliador. Prepara o campo rodando o `Sequelize` para restaurar o **banco de dados de testes** (final `-test`) e sobe a aplicação com `pm2` em modo `fork` (Uma instância pra cada aplicação). Nesse modo as alterações não são assistidas;
  - *uso (na raiz do projeto): `npm start`*

- `stop`: Para e deleta as aplicações rodando no `pm2`;
  - *uso (na raiz do projeto): `npm stop`*

- `dev`: Limpa as portas `3000` e `3001` e sobe a aplicação com `pm2` em modo `fork` (Uma instância pra cada aplicação), nesse modo, as atualizações são assistidas (modo `watch`);
  - *uso (na raiz do projeto): `npm run dev`*

- `dev:prestart`: A partir da raiz, esse comando faz o processo de instalação de dependências (`npm i`) nos dois projetos (`./front-end` e `./back-end`) e roda o `Sequelize` no `./back-end` (lembrar de configurar o `.env` no mesmo);
  - *uso (na raiz do projeto): `npm run dev:prestart`*

- `db:reset`: Rodas os scripts do `Sequelize` restaurando o **banco de dados de desenvolvimento** (final `-dev`), utilize caso ocorra algum problema no seu banco local;
  - *uso (na raiz do projeto): `npm run db:reset`*

- `db:reset:debug`: Rodas os scripts do `Sequelize` restaurando o **banco de dados de desenvolvimento** (final `-dev`), utilize caso ocorra algum problema no seu banco local; Esse comando também é capaz de retornar informações detalhadas de erros (quando ocorrerem no processo);
  - *uso (na raiz do projeto): `npm run db:reset:debug`*

- `test <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de testes** (final `-test`);
  - *uso (na raiz do projeto): `npm test`, `npm test 01login 02register` ou ainda `npm run test 01 02`*

- `test:dev <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`); 
  - *uso (na raiz do projeto): `npm run test:dev`, `npm run test:dev 01login 02register` ou ainda `npm test:dev 01 02`*;

- `test:dev:open <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`), exemplo `npm test:dev:open 01login 02register` ou ainda `npm test:dev:open 01 02`; Esse teste deve mostrar abrir uma janela mostrando o comportamento das páginas;
  - *uso (na raiz do projeto): `npm run test:dev:open`, `npm run test:dev:open 01login 02register` ou ainda `npm test:dev:open 01 02`*;

- `test:dev:report "<nomes-dos-arquivos>"`: Roda todos os testes (ou uma parte deles caso `"<nomes-dos-arquivos>"` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`); Esse teste devolve um output em texto com o resultado de todos os testes; Os `logs` são gerados em `./__tests__/reports`.
  - *uso (na raiz do projeto): `npm run test:dev:report`, `npm run test:dev:report "01login 02register"` ou ainda `npm run test:dev:report "01 02"`*;

---

## Sequelize

⚠️ **IMPORTANTE**: A configuração do sequelize pode ser considerado o **requisito zero** do projeto.

⚠️ **IMPORTANTE**: Antes de iniciar o projeto, garanta que o Sequelize rode corretamente no `./back-end` (pela raiz do projeto, o comando `npm run db:reset` será de grande ajuda, pois serve para restaurar o banco de dados `-dev`).

O projeto já provê uma estrutura inicializada do ORM (em `./back-end/src/database`); Aqui, é necessário que você desenvolva as **migrations** e **seeders** corretamente, seguindo o modelo em `./db.example.sql`.

Esse projeto fornece por padrão o arquivo `.sequelizerc` em `.back-end` para configurações do padrão de pastas no Sequelize.

## Componentização

O nosso [protótipo](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=977%3A391) possui um conjunto de **componentes base**. 

É bom lembrar que um front-end em React com pouca componentização **gera muita manutenção no tempo e atrasa a entrega**. *Aqui, é aconselhável pensar utilizando um [modelo atômico](https://brasil.uxdesign.cc/atomic-design-redesenhando-os-entreg%C3%A1veis-de-designers-e-desenvolvedores-da8886c7258d) de desenvolvimento.*

# Requisitos do projeto

---

## `Fluxo Comum`

O Fluxo comum deve garantir que seja possível **fazer login** e **registrar** no sistema.

---

### `01login.test`

Todos os testes desse arquivo:
- Verificarão se o banco de dados contém as pessoas usuárias padrão (conforme referência em `db.example.sql`);
- Farão a navegação para a página principal em `localhost:3000/login`.

---

####  1 - Crie uma tela de login que deve ser acessível pelos endpoints / e /login no navegador

**Observações técnicas**

- Aqui deve-se garantir que a aplicação possui acesso a uma rota `/login`;
- A rota padrão (`/`) deve fazer redirecionamento para rota `/login`.

---

####  2 - Crie os elementos da tela de login com os data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Login`](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=977%3A392);

---

####  3 - Desenvolva a tela de login de maneira que ela impossibilite o login com dados mal-formatados

**Observações técnicas**

- A senha recebe qualquer tipo de caractere;
- Aqui, os critérios para considerar dados de login **mal-formatados** são:
  - Email incompleto, fora de um padrão comum como: `<email>@<domínioPrincipal>.<domínioGenérico>`;
  - Senha com número de caracteres menor que `6`.

---

####  4 - Desenvolva a tela de login de maneira que ela impossibilite o login com dados válidos, porém inexistentes no banco de dados

**Observações técnicas**

- Sua página deve ser capaz de alertar a pessoa usuária de que aquele login é inválido após sua tentativa. Já que apesar de formatado corretamente, os dados não existam no banco de dados.

---

####  5 - Desenvolva a tela de login de maneira que ela possibilite fazer o login com dados válidos e existentes no banco de dados

**Observações técnicas**

Sua página deve ser capaz de utilizar os dados do cliente previstos em `db.example.sql`:
- Note que, a senha armazenada no banco é uma (`hash md5`)[https://pt.wikipedia.org/wiki/MD5], cuja tradução também está comentada no arquivo;
- Sua API deve ser capaz de traduzir uma senha comum para uma `hash md5`, comparando-a e validando-a com a do banco de dados;
- É possível utilizar bibliotecas de terceiros como a (`md5`)[https://www.npmjs.com/package/md5], ou a nativa [`crypto`](https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options) para conversão de valores para `md5`.

---

####  6 - Crie uma tela de registro que deve ser acessível via endpoint /register no navegador e pelo botão de registro na tela de login

**Observações técnicas**

- Aqui deve-se garantir que a aplicação possui acesso a uma rota `/register`;
- Também deve ser possível acessar a tela de registro clicando no botão de cadastro via tela de login`.

---

####  7 - Crie os elementos da tela de registro com os data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Cadastro`](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=977%3A414);

---

####  8 - Desenvolva a tela de registro de maneira que ela impossibilite o cadastro com dados mal-formatados

**Observações técnicas**

- A senha recebe qualquer tipo de caractere;
- Aqui, os critérios para considerar dados de registro **mal-formatados** são:
  - Nome completo com número de caracteres menor que `12`.
  - Email incompleto, fora de um padrão comum: `<email>@<domínioPrincipal>.<domínioGenérico>`;
  - Senha com número de caracteres menor que `6`.

---

####  9 - Desenvolva a tela de registro de maneira que ela possibilite cadastrar com dados válidos

**Observações técnicas**

Sua página deve ser capaz de cadastrar pessoas usuárias com dados válidos:
- Note que, a senha deve ser armazenada no banco como uma (`hash md5`)[https://pt.wikipedia.org/wiki/MD5], a tradução **deve ocorrer na API**;
- É possível utilizar bibliotecas de terceiros como a (`md5`)[https://www.npmjs.com/package/md5], ou a nativa [`crypto`](https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options) para conversão de valores para `md5`.

---

####  10 - Desenvolva a tela de registro de maneira que ela impossibilite o cadastro de um usuário já existente

**Observações técnicas**

Sua página deve **impedir o cadastro de pessoas com o mesmo Nome ou E-mail**.

---

## `Fluxo do Cliente`

O fluxo do cliente deve garantir que seja possível **navegar e escolher produtos**, **adicionar produtos ao carrinho**, **fazer checkout (gerar uma nova venda)**, **consultar pedidos** e **acessar detalhes do mesmo**.

---

####  11 - Crie uma tela de produtos do cliente contendo uma barra de navegação - navbar - que servirá também para demais telas das pessoas usuárias

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Produtos`](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=977%3A416);

---

####  12 - Desenvolva a tela de produtos do cliente criando os demais elementos com os data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Produtos`](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=977%3A416);
- Deve-se construir um total de `11` cards, cada um correspondente a um item da tabela produtos, conforme a tabela `products` do modelo em `db.example.sql`.
- Os `data-testid` desses itens devem terminar com o id de cada produto, exemplo: 
  - `customer_products__element-card-price-1`; `customer_products__element-card-price-2`; ...; `customer_products__element-card-price-11`.

---

####  13 - Desenvolva a tela de produtos do cliente de forma que ela pressuponha dados válidos da pessoa usuária armazenados no localStorage

**Observações técnicas**

- Após o login (e durante a navegação), deve-se manter os dados da pessoa usuária no `localStorage`, conforme o modelo:

```js script
{
  name: "Nome Da Pessoa Usuária",
  email: "email@dominio.com",
  role: "customer",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTm9tZSBEYSBQZXNzb2EgVXN1w6FyaWEiLCJlbWFpbCI6ImVtYWlsQGRvbWluaW8uY29tIiwicm9sZSI6ImN1c3RvbWVyIn0.s5cmiyY16yViCXkHuzWekxkMeYBi75eT8uJnSbfadNE"
}
```
- Sua página também **deve ser capaz de deslogar a pessoa usuária** que não possuir um `token` válido no `localStorage`;
  - Note que aqui, é necessário que sua API seja capaz **de gerar um `token`** [`JWT`](https://jwt.io/), com base na chave em `./back-end/jwt.evaluation.key` após um login válido.
- Aqui, também será validado se esses dados são descartados ao logout.

---

####  14 - Desenvolva a tela de produtos do cliente de forma que os cards de todos os produtos pré-cadastrados contenham os valores corretos

**Observações técnicas**

- Há um total de `11` cards, cada um correspondente a um item da tabela produtos, conforme a tabela `products` do modelo em `db.example.sql`;
- Os dados desses produtos devem condizer com os dados do banco de dados;
- Nesse requisito, deve-se garantir que as imagens dos produtos estejam disponíveis para acesso direto via rota estática na sua API.

---

####  15 - Desenvolva a tela de produtos do cliente de forma que o preço total esteja correto após a adição de itens aleatórios

**Observações técnicas**

- Cada card deve possibilitar a **adição, remoção ou definição manual** da quantidade de itens de cada produto;
- Esses itens devem compor um "carrinho de compras", que **deve ser persistente no fluxo do cliente até o momento do checkout** (quando o carrinho se torna uma venda concretizada);
  - Dica: Considere utilizar o `localStorage` como forma de armazenar uma entidade `carrinho`;
  - Dica: Considere a utilização de um **contexto específico** para acessar e manipular esses dados (tirando essa competência dos componentes filho);
    - Esse contexto não deve ser geral, ou seja, não deve ser acessado por outras páginas fora do escopo do cliente.
  - Dica: Para facilitar o processo, considere o carrinho como um 'modelo' de uma entidade banco de dados, mas programado no front-end (por ser temporário);
  - Esses dados não devem persistir ao logout.
- O valor total do pedido é a soma dos resultados das quantidades de cada item, multiplicada pelo preço unitário dos mesmos;

---

####  16 - Desenvolva a tela de produtos do cliente de forma que haja um botão de carrinho que redirecionará para a tela de checkout caso itens sejam adicionados

**Observações técnicas**

- Sua página deve garantir que alterações no carrinho também mudem o valor total da venda:
  - Dica: Tire proveito do **contexto específico** mencionado anteriormente para realizar a lógica e fornecer o resultado do cálculo.

---

####  17 - Crie uma tela de checkout do cliente com elementos com os data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Checkout`](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=983%3A622);
- A quantidade de itens no checkout **deve corresponder à quantidade de itens no recorte aleatório de produtos utilizados no teste**;
- Aqui, a referência de identificação do campos das linhas da tabela deve ser o índice (`index`) da matriz (`array`) dos produtos no carrinho de compras, exemplo:
  - `element-order-table-name-0`; `element-order-table-name-1`; ...; `element-order-table-name-x`.

---

####  18 - Desenvolva a tela de checkout do cliente de forma a possuir os dados corretos do carrinho e preço total

**Observações técnicas**

- Os dados propostos no recorte aleatório de produtos (itens e preço total) no teste **devem condizer com os dados contidos no carrinho durante o checkout**.

---

####  19 - Desenvolva a tela de checkout do cliente de forma que seja possível remover itens do carrinho

**Observações técnicas**

- O cliente deve ser capaz de remover itens do carrinho pela tela de checkout, alterando o valor total da venda.

---

####  20 - Desenvolva a tela de checkout do cliente de forma a nos redirecionar para a tela de detalhes do pedido feito após a finalização do mesmo

**Observações técnicas**

- Não se preocupe aqui em ter a tela de detalhes do pedido pronta; 
  - O que deve estar garantido, é que é possível ter acesso a uma rota `localhost:3000/customer/orders/<id>` no front, onde o `id` é retornado da requisição da venda;
- Ao final do pedido (ao clicar no 'Botão de finalização do pedido'), a tela de checkout deve disparar uma requisição pra API, inserindo a venda e retornando o `id` da mesma, para utilização no redirecionamento.

---

####  21 - Desenvolva a tela de checkout do cliente de forma a gerar uma nova venda na tabela sales, assim como relações em salesProducts ao finalizar o pedido

**Observações técnicas**

- O "status" padrão de cada pedido deve ser `Pendente`;
  - *Para ficar no radar:* Os status de um pedido podem ser:
      - `Pendente`;
      - `Preparando`;
      - `Em Trânsito`;
      - `Entregue`.
- Deve-se garantir que a requisição para API se encarregue de criar uma venda, e na mesma requisição, relacionar essa venda com os produtos do carrinho:
  - Aqui possuímos uma relação de `N:N` (Muitos para muitos) onde se relacionam as tabelas: `sales` < 1:N > `salesProducts` < N:1 > `products`.
- Os testes farão a inserção da venda via checkout e após isso farão a validação desses dados no banco de dados.
- Atente que, no [protótipo](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=977%3A659), a tela `Cliente / Detalhes do Pedido` possui **a data do pedido**:
  - A data deve ser inserida automaticamente durante o processo de inserção da venda após o checkout;
  - O banco de dados está configurado para o [`fuso horário Zulu (Z)`](https://pt.wikipedia.org/wiki/Fuso_hor%C3%A1rio#Meridianos) (`timezone: 'Z'` em `./back-end/database/config/config.js`) que é alinhado com o `UTC+0`;
    - Saiba mais sobre o [`UTC` (Tempo universal coordenado)](https://pt.wikipedia.org/wiki/Tempo_Universal_Coordenado);
    - Isso é necessário para evitar conflitos de horário na hora da leitura e escrita da informação no banco de dados.
  - É possível utilizar bibliotecas externas para manipulação de datas como o [`Moment.js`](https://momentjs.com/), ou mesmo utilizar o objeto [`Date`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date) para normatizar horários na hora da leitura ou escrita no formato `UTC`.
- Dica: É possível utilizar o Sequelize para definir um valor padrão para um campo durante a criação do seu modelo, valores padrão podem incluir a [data atual](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html).

---

####  22 - Crie uma tela de pedidos do cliente com elementos a partir dos data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Meus Pedidos`](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=977%3A637);
- Os `data-testid` desses itens devem terminar com o `id` de cada venda no banco, exemplo: 
  - `customer_products__element-order-date-1`; `customer_products__element-order-date-2`; ...; `customer_products__element-order-date-x`.

---

####  23 - Desenvolva a tela de pedidos do cliente de forma a conter a lista de pedidos do mesmo com os dados corretos

**Observações técnicas**

- Garanta que os dados dos itens de cada card condizem com as vendas registradas na tabela `sales` (vendas);

---

####  24 - Desenvolva a tela de pedidos do cliente de forma a dar acesso à tela de detalhes de um pedido ao clicar no card do mesmo

**Observações técnicas**

- Não se preocupe aqui em ter a tela de detalhes do pedido pronta; 
  - O que deve estar garantido, é que é possível ter acesso a uma rota `localhost:3000/customer/orders/<id>` no front;
- Aqui, o acesso a cada item deve ser possível pelos cards na tela de pedidos;

---

####  25 - Crie uma tela de detalhes do pedido do cliente com elementos a partir dos data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Detalhes do Pedido`](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=977%3A659);

---

####  26 - Desenvolva a tela de detalhes do pedido do cliente de forma a possuir os dados corretos da venda

**Observações técnicas**

- Sua aplicação deve garantir que os dados do pedido do cliente estejam atualizados ao acessar o detalhe de algum deles.

---

####  27 - Crie uma tela de pedidos da pessoa vendedora com elementos a partir dos data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`P. Vend / Pedidos`](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=982%3A372);
- Os `data-testid` desses itens devem terminar com o `id` de cada venda no banco, exemplo: 
  - `seller_orders__element-order-date-1`; `seller_orders__element-order-date-2`; ...; `seller_orders__element-order-date-x`.

---

####  28 - Desenvolva a tela de pedidos da pessoa vendedora de forma a conter a lista de pedidos do mesmo com os dados corretos

**Observações técnicas**

- Garanta que os dados dos itens de cada card condizem com as vendas registradas na tabela `sales` (vendas);

---

####  29 - Desenvolva a tela de pedidos da pessoa vendedora de forma a dar acesso à tela de detalhes de um pedido ao clicar no card do mesmo

**Observações técnicas**

- Não se preocupe aqui em ter a tela de detalhes do pedido pronta; 
  - O que deve estar garantido, é que é possível ter acesso a uma rota `localhost:3000/seller/orders/<id>` no front;
- Aqui, o acesso a cada item deve ser possível pelos cards na tela de pedidos;

---

####  30 - Crie uma tela de detalhes do pedido da pessoa vendedora com elementos a partir dos data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`P. Vend / Detalhes do Pedido`](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=982%3A443);

---

####  31 - Desenvolva a tela de detalhes do pedido da pessoa vendedora de forma a possuir os dados corretos da venda

**Observações técnicas**

- Sua aplicação deve garantir que os dados do pedido do cliente estejam atualizados ao acessar o detalhe de algum deles.

---

####  32 - Desenvolva a tela de detalhes do pedido da pessoa vendedora de forma a ser capaz de alterar o status do pedido

**Observações técnicas**

- Os status de um pedido podem ser:
  - `Pendente` - **Valor padrão** na criação do pedido;
  - `Preparando` - Status que **pode ser alterado pela pessoa vendedora**;
  - `Em Trânsito` - Status que **pode ser alterado pela pessoa vendedora**;
  - `Entregue` - Status que **pode ser alterado pelo cliente**.
- Esse requisito irá avaliar se **as alterações do status do pedido na tela da pessoa vendedora são persistentes ao clicar em**: `Botão de marcar para 'preparo'`, `Botão de marcar para 'saiu para entrega'`:
  - O `Botão de marcar para 'preparo'` deve estar habilitado caso o status do pedido esteja como `Pendente`, esse botão deve alterar o status do pedido para `Preparando`;
  - O `Botão de marcar para 'preparo'` deve estar desabilitado caso o status do pedido esteja como `Preparando`, `Em Trânsito` ou `Entregue`;
  - O `Botão de marcar para 'saiu para entrega'` deve estar habilitado caso o status do pedido esteja como `Preparando`, esse botão deve alterar o status do pedido para `Em Trânsito`;
  - O `Botão de marcar para 'saiu para entrega'` deve estar desabilitado caso o status do pedido esteja como `Pendente`, `Em Trânsito` ou `Entregue`;

---

####  33 - Garanta que o status do pedido atualizado na tela de detalhes do pedido da pessoa vendedora seja refletido na tela de detalhes do pedido do cliente após atualização das páginas

**Observações técnicas**

- Sua aplicação deve garantir que:
  - Dado o fluxo de criação de um pedido pelo cliente, que leva a tela de detalhes daquele pedido;
  - Dado o acesso dos detalhes desse pedido pela pessoa vendedora em paralelo (não há logout no processo);
- Seja possível **fazer a alteração no status do pedido pela pessoa vendedora**, e ao **atualizar as páginas**, esse status **esteja refletido na tela de detalhes do pedido do cliente**.

---

####  34 - Garanta que o status do pedido atualizado na tela de detalhes do pedido da pessoa vendedora seja refletido na tela de lista de pedidos do cliente após atualização das páginas

**Observações técnicas**

- Sua aplicação deve garantir que:
  - Dado o fluxo de criação de um pedido pelo cliente, acessando após isso, a tela de lista de pedidos do mesmo;
  - Dado o acesso dos detalhes desse pedido pela pessoa vendedora em paralelo (não há logout no processo);
- Seja possível **fazer a alteração no status do pedido pela pessoa vendedora**, e ao **atualizar as páginas**, esse status **esteja refletido no mesmo item listado na tela de pedido do cliente**.

---

####  35 - Garanta que o status do pedido atualizado na tela de detalhes do pedido do cliente seja refletido na tela de lista de pedidos da pessoa vendedora após atualização das páginas

**Observações técnicas**

- Sua aplicação deve garantir que:
  - Dado o fluxo de criação de um pedido pelo cliente, que leva a tela de detalhes daquele pedido;
  - Dado o acesso dos detalhes desse pedido pela pessoa vendedora em paralelo (não há logout no processo);
  - Dada a alteração de status do pedido da pessoa vendedora (colocando o pedido "Em trânsito");
  - Dado o acesso da lista de pedidos pela pessoa vendedora em paralelo (não há logout no processo);
- Seja possível **fazer a alteração no status do pedido pelo cliente**, e ao **atualizar as páginas**, esse status **esteja refletido no mesmo item listado na tela de pedido da pessoa vendedora**.
- Esse requisito também validará a interação com: `Botão de marcar como 'entregue'`:
  - O `Botão de marcar como 'entregue'` deve estar habilitado caso o status do pedido esteja como `Em Trânsito`, esse botão deve alterar o status do pedido para `Entregue`;
  - O `Botão de marcar como 'entregue'` deve estar desabilitado caso o status do pedido esteja como `Pendente`, `Preparando` ou `Entregue`;

---

####  36 - Desenvolva a tela de detalhes do pedido da pessoa vendedora de forma a interagir em tempo real com a tela de detalhes do pedido do cliente

**Observações técnicas**

- Sua aplicação deve garantir que:
  - Dado o fluxo de criação de um pedido pelo cliente, que leva a tela de detalhes daquele pedido;
  - Dado o acesso dos detalhes desse pedido pela pessoa vendedora em paralelo (não há logout no processo);
- Seja possível **fazer a alteração no status do pedido pela pessoa vendedora**, e **sem atualizar as páginas**, esse status **esteja refletido na tela de detalhes do pedido do cliente**.

---

####  37 - Desenvolva a tela de detalhes do pedido da pessoa vendedora de forma a interagir em tempo real com a tela de lista de pedidos do cliente

**Observações técnicas**

- Sua aplicação deve garantir que:
  - Dado o fluxo de criação de um pedido pelo cliente, acessando após isso, a tela de lista de pedidos do mesmo;
  - Dado o acesso dos detalhes desse pedido pela pessoa vendedora em paralelo (não há logout no processo);
- Seja possível **fazer a alteração no status do pedido pela pessoa vendedora**, e **sem atualizar as páginas**, esse status **esteja refletido no mesmo item listado na tela de pedido do cliente**.

----

####  38 - Desenvolva a tela de detalhes do pedido do cliente de forma a interagir em tempo real com a tela de lista de pedidos da pessoa vendedora

**Observações técnicas**

- Sua aplicação deve garantir que:
  - Dado o fluxo de criação de um pedido pelo cliente, que leva a tela de detalhes daquele pedido;
  - Dado o acesso dos detalhes desse pedido pela pessoa vendedora em paralelo (não há logout no processo);
  - Dada a alteração de status do pedido da pessoa vendedora (colocando o pedido "Em trânsito");
  - Dado o acesso da lista de pedidos pela pessoa vendedora em paralelo (não há logout no processo);
- Seja possível **fazer a alteração no status do pedido pelo cliente**, e **sem atualizar as páginas**, esse status **esteja refletido no mesmo item listado na tela de pedido da pessoa vendedora**.
- Esse requisito também validará a interação com: `Botão de marcar como 'entregue'`:
  - O `Botão de marcar como 'entregue'` deve estar habilitado caso o status do pedido esteja como `Em Trânsito`, esse botão deve alterar o status do pedido para `Entregue`;
  - O `Botão de marcar como 'entregue'` deve estar desabilitado caso o status do pedido esteja como `Pendente`, `Preparando` ou `Entregue`;

---

## `Fluxo da Pessoa Administradora`

O fluxo da pessoa administradora deve possibilitar **o cadastro de clientes e pessoas vendedoras** tal como a remoção dos mesmos.

---

####  39 - Crie uma tela de pessoa administradora com elementos a partir dos data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`P. Adm. / Gerenciamento`](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=990%3A739);
  - Num primeiro momento, não serão considerados os itens da tabela de usuários, foque aqui em consolidar o formulário de cadastro.

---

####  40 - Desenvolva a tela da pessoa administradora de forma a validar o formulário de cadastro

**Observações técnicas**

- Assim como no formulário de registro aqui também serão validados os campos para registro;
- Aqui, os critérios para considerar dados de registro **mal-formatados** são:
  - Nome completo com número de caracteres menor que `12`.
  - Email incompleto, fora de um padrão comum: `<email>@<domínioPrincipal>.<domínioGenérico>`;
  - Senha com número de caracteres menor que `6`;
  - Não definir o cargo (`role`):
    - Dica: O `select` do cargo (`role`), pode ter um valor default.

---

####  41 - Desenvolva a tela da pessoa administradora de forma que seja possível cadastrar pessoas usuárias válidas

**Observações técnicas**

Sua página deve ser capaz de cadastrar pessoas usuárias com dados válidos:
- Note que, a senha deve ser armazenada no banco como uma (`hash md5`)[https://pt.wikipedia.org/wiki/MD5], a tradução **deve ocorrer na API**;
- É possível utilizar bibliotecas de terceiros como a (`md5`)[https://www.npmjs.com/package/md5], ou a nativa [`crypto`](https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options) para conversão de valores para `md5`;

Aqui a rota de cadastro **deve ser diferente da rota de cadastro comum**, pois também é possível definir a categoria de usuário aqui (`role`);
- Essa é uma rota **específica para pessoa administradora**, portanto a mesma rota na api deve considerar um **token** válido e referênte ao usuário de categoria `administrator`;

---

####  42 - Desenvolva a tela da pessoa administradora de forma que ela impossibilite o cadastro de pessoas usuárias já existentes

**Observações técnicas**

Sua página deve **impedir o cadastro de pessoas com o mesmo Nome ou E-mail**.

---

####  43 - (`Bônus`) Desenvolva a tela da pessoa administradora de forma que haja uma tabela de pessoas usuárias cadastradas

**Observações técnicas**

- Aqui, é necessário que a página também **retorne os dados atualizados das pessoas usuárias cadastradas** (não incluindo pessoas administradoras):
  - Não é necessário interação em tempo real nesta página, utilizar o socket nesse contexto pode interferir na avaliação;
  - Dica: É possível utilizar um **contexto específico** que contemple o formulário e a tabela de usuários;

---

####  44 - (`Bônus`) Desenvolva a tela da pessoa administradora de forma que seja possível deletar pessoas usuárias na tabela

**Observações técnicas**

- A pessoa administradora deve ser capaz de remover pessoas usuárias através da tabela.
  - Na api, essa é uma rota **protegida e exclusiva da pessoa administradora**, portanto deve considerar um **token** válido e referente ao usuário de categoria `administrator`;

---

####  45 - Crie testes que cubram no mínimo 30 por cento dos arquivos do front-end e back-end em src com um mínimo de 75 linhas cobertas em cada

**Observações técnicas**

Garanta que tanto o seu `front-end` quanto `back-end` possuem testes que cubram ao menos `30%` da aplicação com `75` linhas cobertas:
- É possível testar a cobertura de duas formas:
  - A partir da raiz de cada projeto, utilizando `npm run test:coverage` (o que deve trazer uma tabela de cobertura, sem o número absoluto de linhas cobertas);
  - A partir da raiz de cada projeto, utilizando `npm run test:coverage:json` (o que deve trazer um arquivo `./coverage/coverage.json`, com um detalhamento da cobertura);

---

####  46 - (`Bônus`) Crie testes que cubram no mínimo 60 por cento dos arquivos do front-end e back-end em src com um mínimo de 150 linhas cobertas em cada

**Observações técnicas**

Garanta que tanto o seu `front-end` quanto `back-end` possuem testes que cubram ao menos `60%` da aplicação com `150` linhas cobertas:
- É possível testar a cobertura de duas formas:
  - A partir da raiz de cada projeto, utilizando `npm run test:coverage` (o que deve trazer uma tabela de cobertura, sem o número absoluto de linhas cobertas);
  - A partir da raiz de cada projeto, utilizando `npm run test:coverage:json` (o que deve trazer um arquivo `./coverage/coverage.json`, com um detalhamento da cobertura);

---

####  47 - (`Bônus`) Crie testes que cubram no mínimo 90 por cento dos arquivos do front-end e back-end em src com um mínimo de 225 linhas cobertas em cada

**Observações técnicas**

Garanta que tanto o seu `front-end` quanto `back-end` possuem testes que cubram ao menos `90%` da aplicação com `225` linhas cobertas:
- É possível testar a cobertura de duas formas:
  - A partir da raiz de cada projeto, utilizando `npm run test:coverage` (o que deve trazer uma tabela de cobertura, sem o número absoluto de linhas cobertas);
  - A partir da raiz de cada projeto, utilizando `npm run test:coverage:json` (o que deve trazer um arquivo `./coverage/coverage.json`, com um detalhamento da cobertura);
