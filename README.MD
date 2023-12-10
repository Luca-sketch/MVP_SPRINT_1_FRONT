#<h1 style="color: blue;">Front-end (Next Logistics WMS)</h1>

## Definição e propósito

Este projeto é a parte frontal de um sistema de WMS podendo ser utilizado em qualquer local que envolva movimentação de produto. Ele resolve o problema da utilização de registros em papel para historico de movimentações de produto ou ausencia do mesmo.

## Funcionamento interno

O sistema é composto por seis telas:

####Telas
* Login
* Cadastro
* Nova Senha
* Escolha
* Novo
* Histórico

### Login

Digite um login previamente cadastrado no banco **(Usuário e senha)**

![Login Image](https://raw.githubusercontent.com/Luca-sketch/MVP_SPRINT_1_Arquivos/76a04181ad98022b5e0b0d38be6073505b5740e6/Login.PNG)

### Cadastro

Cria um novo usuário **(Usuário e senha)**

![Cadastro Image](https://raw.githubusercontent.com/Luca-sketch/MVP_SPRINT_1_Arquivos/76a04181ad98022b5e0b0d38be6073505b5740e6/Cadastro.PNG)

### Alterar senha

Altera uma senha de um usuário cadastrado **(Usuário, senha e nova senha)**

![Nova senha Image](https://raw.githubusercontent.com/Luca-sketch/MVP_SPRINT_1_Arquivos/76a04181ad98022b5e0b0d38be6073505b5740e6/Nova_Senha.PNG)

### Seleção de Telas

Escolhe entre duas opções:

* **Novo**
    * Tela para adicionar um novo item em uma posição
* **Histórico**
    * Visualizar os registros conforme padrão de entrada

![Escolha Image](https://raw.githubusercontent.com/Luca-sketch/MVP_SPRINT_1_Arquivos/76a04181ad98022b5e0b0d38be6073505b5740e6/Escolha.PNG)


### Novo

Inseri um novo material em uma posição do estoque

![Novo Image](https://raw.githubusercontent.com/Luca-sketch/MVP_SPRINT_1_Arquivos/76a04181ad98022b5e0b0d38be6073505b5740e6/Novo.PNG)

*Observação:* Nesse projeto/ documentação compreende "rua" como o "corredor" do estoque e a "posição" como o "nível" ou  a "prateleira", ex: nivel baixo, 

### Histórico

Visualizar todos os itens no estoque na posição e rua inseridos. Pode ser apenas Rua ou apenas Posição. Se for inserido ambos o sistema irá busca exatemente a posição rua.


![Histórico Image](https://raw.githubusercontent.com/Luca-sketch/MVP_SPRINT_1_Arquivos/76a04181ad98022b5e0b0d38be6073505b5740e6/Hist%C3%B3rico.PNG)

## Como executar

Basta fazer o download de todos os arquivos desse diretório e abrir no próprio navegador. Os arquivos dentro de sua pasta devem ficar dessa forma:

|->Images (**folder**)
|   index.html
|   style.css
|   script.js

**Pontos de atenção**

1. É importantissimo que o script.js esteja no mesmo diretório do index.html. O arquivo JS é o responsavél por manipular a visibilidade das telas além de outras funções
2. O sistema foi testado nos navegadores Chrome e Opera.
3.  Para uma completa utilização do sistema é necessário uma api em back-end gerenciando as requisições e o banco de dados