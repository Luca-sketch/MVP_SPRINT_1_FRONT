//Variavel referência para seleção de telas
var pagina = "login";
// Variável global para armazenar o usuário
var usuarioGlobal = null;
// Função para atualizar o nome do usuário
function atualizarNomeUsuario() {
    var elementoUsuario = document.getElementById('usuario_logado');
    elementoUsuario.innerHTML = '<h3>' + usuarioGlobal + '</h3>';    
}
//Efeito visual do formulario inicial
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('warehouse-image').classList.add('visible');
    document.getElementById('formulario_inicial').classList.add('visible');
});

// A seção abaixo manipula  as Divs tornando-as visiveis ou invisiveis dependendo da escolha do usúario
// A mudança de visibilidade ocorre a partir da manipulação das Classe e ID's

/*******************************************

            Fução Ocultando Divs

********************************************/
window.onload = function () {
    const cadastro = document.getElementsByClassName('cadastro')[0];
    const tela_selecionar = document.getElementById('tela_selecionar');
    const tela_novo = document.getElementById('tela_novo');
    const tela_historico = document.getElementById('tela_historico');
    const usuario_logado = document.getElementById('usuario_logado');
    const nova_senha = document.getElementsByClassName('nova_senha')[0];
    back_icon = document.getElementById('back_icon');
    cadastro.style.display = "none";
    tela_selecionar.style.display = "none";
    tela_novo.style.display = "none";
    tela_historico.style.display = "none";
    usuario_logado.style.display = "none";
    back_icon.style.display = "none"; 
    nova_senha.style.display = "none";
}
/*******************************************

            Função Seleciona Cadastro

********************************************/
function FormularioCadastro(event) {
    event.preventDefault();
    const cadastro = document.getElementsByClassName('cadastro')[0];
    const login = document.getElementsByClassName('login')[0];
    cadastro.style.display = "block";
    login.style.display = "none";
}
/*******************************************

            Função tornar visivel Nova Senha

********************************************/
function FormularioNovaSenha(event) {
    event.preventDefault();
    const login = document.getElementsByClassName('login')[0]
    const nova_senha = document.getElementsByClassName('nova_senha')[0];
    login.style.display = "none";
    nova_senha.style.display = "block";
}
/*******************************************

            Função Tornar apenas o Login Visivel

********************************************/
function FormularioLogin(event) {
    event.preventDefault();
    const cadastro = document.getElementsByClassName('cadastro')[0];
    const login = document.getElementsByClassName('login')[0]
    const nova_senha = document.getElementsByClassName('nova_senha')[0];
    cadastro.style.display = "none";
    nova_senha.style.display = "none";
    login.style.display = "block";   
}
/*******************************************

            Função Tornar visivel apenas a tela selecionar

********************************************/
function tela_selecionar(event) {
    event.preventDefault();
    const tela_selecionar = document.getElementById('tela_selecionar');
    const tela_login = document.getElementById('tela_login');
    const usuario_logado = document.getElementById('usuario_logado');
    tela_selecionar.style.display = "block";
    tela_login.style.display = "none";
    usuario_logado.style.display = "block";
    back_icon.style.display = "block";
    pagina = "selecionar";
    console.log(pagina)
}
/*******************************************

            Função Tornar visivel apenas o novo

********************************************/
function tela_novo(event) {
    event.preventDefault();
    const tela_selecionar = document.getElementById('tela_selecionar');
    const tela_novo = document.getElementById('tela_novo');
    tela_selecionar.style.display = "none";
    tela_novo.style.display = "block";
    pagina = "novo";
    console.log(pagina)
}
/*******************************************

            Função Tornar visivel apenas o login

********************************************/
function tela_historico(event) {
    event.preventDefault();
    const tela_selecionar = document.getElementById('tela_selecionar');
    const tela_historico = document.getElementById('tela_historico');
    tela_selecionar.style.display = "none";
    tela_historico.style.display = "block";
    pagina = "historico";
    console.log(pagina)
}
function voltar_tela() {
    console.log("alguem me chamou")
    const tela_selecionar = document.getElementById('tela_selecionar');
    const tela_novo = document.getElementById('tela_novo');
    const tela_historico = document.getElementById('tela_historico');
    switch (pagina) {
        case "selecionar":
            location.reload()
            break;
        case "novo":
            tela_selecionar.style.display = "block";
            tela_novo.style.display = "none";
            pagina = "selecionar";
            console.log(pagina)
            break;
        case "historico":
            tela_selecionar.style.display = "block";
            tela_historico.style.display = "none";
            pagina = "selecionar";
            console.log(pagina)
            break;
    }
}
// 
// A seção abaixo conecta o front end com as rotas do back-end
//

/*******************************************

            Função Cadastro

********************************************/
function enviarCadastro(event) {
    event.preventDefault();

    // Obtenha os valores dos campos de entrada
    var usuarioInput = document.getElementById("new_usuario");
    var senhaInput = document.getElementById("new_senha");

    var usuario = usuarioInput.value;
    var senha = senhaInput.value;

    // Verifique se ambos os campos estão preenchidos
    if (!usuario || !senha) {
        alert('Por favor, preencha tanto o nome quanto a senha.');
        return;
    }

    // Crie um objeto FormData
    var formData = new FormData();
    formData.append('nome', usuario);
    formData.append('senha', senha);

    // Faça a solicitação HTTP usando Fetch
    fetch('http://127.0.0.1:5000/cadastro', {
        method: 'POST',
        body: formData,
    })
    .then(async response => {
        if (!response.ok) {
            // Se a resposta não for bem-sucedida, lance um erro
            const data = await response.json();
            alert(`Erro: ${data.message}`);
            throw new Error(`Erro: ${data.message}`);
        }
        alert('Cadastro atualizado com sucesso!');
        // Limpar os campos do formulário
        usuarioGlobal = usuario;
        atualizarNomeUsuario();
        tela_selecionar(event)
        return response.json();
    })
    .catch(error => {
        // Lide com erros gerais
        console.error('Erro na solicitação:', error);
        alert(`Erro na solicitação: ${error.message}`);
    })}

/*******************************************

            Função Criar Nova Senha

********************************************/
function cadastrarNovaSenha(event) {
    event.preventDefault();

    // Obtenha os valores dos campos de entrada
    var usuarioInput = document.getElementById("new_usuario_2").value;
    var senhaInput = document.getElementById("new_senha_2").value;
    var novaSenhaInput = document.getElementById("nova_senha_22").value;

    var usuario = usuarioInput;
    var senha = senhaInput;
    var nova_Senha = novaSenhaInput;


    // Verifique se todos os campos estão preenchidos
    if (!usuarioInput || !senhaInput || !novaSenhaInput) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Crie um objeto FormData
    var formData = new FormData();
    formData.append('nome', usuario);
    formData.append('senha', senha);
    formData.append('senha_nova', nova_Senha);

    // Faça a solicitação HTTP usando Fetch
    fetch('http://127.0.0.1:5000/atualizar_cadastro', {
        method: 'POST',
        body: formData,
    })
    .then(async response => {
        // Limpar campos independentemente do resultado
        usuarioInput.value = '';
        senhaInput.value = '';
        novaSenhaInput.value = '';

        if (!response.ok) {
            // Se a resposta não for bem-sucedida, exiba uma mensagem de erro
            const data = await response.json();
            alert(`Erro: ${data.message}`);
            throw new Error(`Erro: ${data.message}`);
        }

        // Se a resposta for bem-sucedida, exiba uma mensagem de sucesso
        alert('Cadastro de nova senha realizado com sucesso!');
        // Armazene o usuário na variável global
        usuarioGlobal = usuario;
        atualizarNomeUsuario();
        tela_selecionar(event);
        return response.json();
    })
    .then(data => {
        // Exiba data
        console.log(data);
    })
    .catch(error => {
        // Lide com erros gerais
        console.error('Erro na solicitação:', error);
    });
}
/*******************************************

            Função Login

********************************************/

function realizarLogin(event) {
    // Obtenha os valores dos campos de entrada
    var usuarioInput = document.getElementById("usuario");
    var senhaInput = document.getElementById("senha");

    var usuario = usuarioInput.value;
    var senha = senhaInput.value;

    // Verifique se ambos os campos estão preenchidos
    if (!usuario || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Crie um objeto FormData e adicione os dados do formulário
    var formData = new FormData();
    formData.append('nome', usuario);
    formData.append('senha', senha);

    // Faça a solicitação HTTP usando Fetch
    fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        body: formData
    })
    .then(async response => {
        if (!response.ok) {
            // Se a resposta não for bem-sucedida, exiba uma mensagem de erro
            const data = await response.json();
            alert(`Erro: ${data.message}`);
            throw new Error(`Erro: ${data.message}`);
        }
        
        // Se a resposta for bem-sucedida, exiba uma mensagem de sucesso
        alert('Login bem-sucedido! Seja bem vindo Next Logistics WMS');
        usuarioGlobal = usuario;
        atualizarNomeUsuario();
        tela_selecionar(event);
        return response.json();
    })
    .then(data => {
        // Mostre data
        console.log(data);
    })
    .catch(error => {
        // Lide com erros gerais
        console.error('Erro na solicitação:', error);
    });
}
/*******************************************

            Função Criar Novo produto

********************************************/

function enviar(event) {
    console.log(usuarioGlobal)
    event.preventDefault();

    // Obtenha os valores dos campos de entrada
    var materialInput = document.getElementById("new_material").value;
    var quantidadeInput = document.getElementById("new_quantidade").value;
    var skuInput = document.getElementById("new_sku").value;
    var ruaInput = document.getElementById("new_rua").value;
    var posicaoInput = document.getElementById("new_posicao").value;
    

    // Verifique se algum dos campos está vazio
    if (!materialInput || !quantidadeInput || !skuInput || !ruaInput || !posicaoInput) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Crie um objeto FormData
    var formData = new FormData();
    formData.append('material', materialInput);
    formData.append('quantidade', quantidadeInput);
    formData.append('sku', skuInput);
    formData.append('rua', ruaInput);
    formData.append('posicao', posicaoInput);
    formData.append('nome',usuarioGlobal)

    // Faça a solicitação HTTP usando Fetch
    fetch('http://127.0.0.1:5000/endereco', {
        method: 'POST',
        body: formData,
    })
    .then(async response => {
    
        if (!response.ok) {
            // Se a resposta não for bem-sucedida, lance um erro
            const data = await response.json();
            alert(`Erro: ${data.message}`);
            throw new Error(`Erro: ${data.message}`);
        }
    
        // Se a resposta for bem-sucedida, mas contém uma mensagem indicando duplicidade
        if (response.status === 400) {
            const data = await response.json();
            alert(`Aviso: ${data.message}`);
            return;  // Encerra a execução da função aqui para evitar mais processamento desnecessário
        }
    
        // Crie um alerta
        alert('Novo produto inserido com sucesso!');
    
        // Limpar os campos do formulário
        document.getElementById("new_material").value = '';
        document.getElementById("new_quantidade").value = '';
        document.getElementById("new_sku").value = '';
        document.getElementById("new_rua").value = '';
        document.getElementById("new_posicao").value = '';
        return response.json();
    })

.then(data => {
  // Mostre data
  console.log(data);
})
    .catch(error => {
        // Lide com erros gerais
        console.error('Erro na solicitação:', error);
        alert(`Erro na solicitação: ${error.message}`);
    });
}
/*******************************************

            Função Buscar Material no BackEnd

********************************************/
async function preencherTabela(event) {
    event.preventDefault();
  
    var ruaInput = document.getElementById("filtroRua").value;
    var posicaoInput = document.getElementById("filtroPosicao").value;
  
    if (!ruaInput && !posicaoInput) {
      alert("Por favor, preencha pelo menos um dos campos: Rua ou Sku.");
      return;
    }
  
    let url = `http://127.0.0.1:5000/endereco_buscar?rua=` + ruaInput + `&posicao=` + posicaoInput;
  
    fetch(url, {
      method: "get",
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            alert("Nenhum valor encontrado.");
          } else {
            throw new Error("Erro de rede!");
          }
        }
        return response.json();
      })
      .then((data) => {
        const tabela = document.getElementById("tabela");
  
        tabela.innerHTML = `
          <tr>
            <th>Material</th>
            <th>Quantidade</th>
            <th>Sku</th>
            <th>Rua</th>
            <th>Posição</th>
            <th>Nome</th>
            <th></th>
          </tr>
        `;
  
        if (data.message === "Deu certo") {
          const produtos = data.produtos;
          for (let i = 0; i < produtos.length; i++) {
            const produto = produtos[i];
            const row = tabela.insertRow(-1);
            row.dataset.id = produto.id;
            row.insertCell(0).textContent = produto.material;
            row.insertCell(1).textContent = produto.quantidade;
            row.insertCell(2).textContent = produto.sku;
            row.insertCell(3).textContent = produto.rua;
            row.insertCell(4).textContent = produto.posicao;
            row.insertCell(5).textContent = produto.nome;
            let cell = row.insertCell();
            cell.className = "iconCell";
            let img = document.createElement("img");
            img.src = "Images/lixeira.png";
            img.alt = "Seta";
            img.style.width = "20px";
            img.style.height = "20px";
            cell.appendChild(img);
            let lixeira = row.querySelector(".iconCell img");
            lixeira.addEventListener("click", function(event) {
              console.log("ID do endereço: ", event.target.parentElement.parentElement.dataset.id);
              deleteItem(event);
            });
          }
        } else {
          alert(data.message);
        }
      });
  }

/*******************************************

            Função Deletar produto

********************************************/
function deleteItem(event) {
    let id = event.target.parentElement.parentElement.dataset.id; 
    console.log("ID enviado: ", id); 
    let url = `http://127.0.0.1:5000/endereco_apagar`;

    let formdata = new FormData();
    formdata.append("endereco_id", id);
    fetch(url, {
        method: 'DELETE',
        body: formdata
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.message === "Item excluído com sucesso!") {
            alert(data.message);
            event.target.parentElement.parentElement.remove(); 
        } else {
            alert(data.message); 
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}






// Função para popular a tabela com os dados
/*
async function preencherTabela(event) {
    event.preventDefault();
    try {
        let response = await fetch('dados.json');
        let data = await response.json();
        let tabelas = document.getElementById('tabela');
        for (let item of data) {
            let linha = tabelas.insertRow();
            linha.insertCell().textContent = item.Material;
            linha.insertCell().textContent = item.Quantidade;
            linha.insertCell().textContent = item.Sku;
            linha.insertCell().textContent = item.Rua;
            linha.insertCell().textContent = item.Posicao;
            let cell = linha.insertCell();
            cell.className = 'iconCell';
            let img = document.createElement('img');
            img.src = 'https://github.com/Luca-sketch/MVP_SPRINT_1/blob/main/lixeira.png?raw=true';
            img.alt = 'Seta';
            img.style.width = '20px';
            img.style.height = '20px';
            cell.appendChild(img);

            linha.addEventListener('click', function () {
                // Quando a linha é clicada, imprima os dados da linha
                console.log('Chave: ' + item.chave + ', LPN: ' + item.lpn);
            });
        }
    } catch (error) {
        console.error(error);
    }
}
*/