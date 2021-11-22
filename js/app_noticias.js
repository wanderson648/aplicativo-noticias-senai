//lista com todas as noticias
let todasNoticias = []



//ocultando o titulo das noticias 
document.querySelector("#tituloNoticias").style = "display: block"



//2 - Adicionar ao Array todasNoticias as noticias do campo textarea da tela[x]
//2.1 - Fazer uma verificação se o campo noticias está preenchido corretamente alert("Digite uma noticia!")[x]
//2.2 - Mostre o tituloNoticias com a quantidade de noticias id="qtdNoticias"[x]
//2.3 - Faça uma limpeza no campo de noticias e aponte o foco para ele[x]
// * Não exibir as noticias ainda, deixe isso para a função mostrarNoticias[x]
const cadastrarNoticia = function(){
  document.querySelector('#btnCadastrarNoticia').addEventListener('click', ()=> {
    const noticia = document.querySelector('#noticia').value;

    if(!noticia || noticia.length < 10) {  
      alert('Digite uma notícia!');
    } 
    else {
      todasNoticias.push(noticia);

  
      document.querySelector('textarea').value = '';
      document.querySelector('textarea').focus();
      document.querySelector('#qtdNoticias').textContent++;
      document.querySelector("#tituloNoticias").style = "display: block"
    } 
  });
}

//3 - Mostrar as noticias cadastradas[x]
//3.1 - Fazer uma verificação se o o array todasNoticias tem algo na lista alert("Você não possui noticias cadastradas")[x]
//3.2 - Usar um forEach no todasNoticias para exibir as noticias uma a uma dentro da div id="mostrarNoticias" em uma tag article conforme o exemplo abaixo:[x]
//<article class="message is-info is-medium"><div class="message-header"><h1>Notícia 1</h1></div><div class="message-body">
// Devastação da Amazônia não para e atinge 13 mil km² em 1 ano </div></article>[]
//3.3 - Faça uma limpeza no campo de noticias[x]
const mostrarNoticias = function(){
  document.querySelector('#btnMostrar').addEventListener('click', ()=> {
    let not = document.querySelector('#mostrarNoticias');

    if(todasNoticias.length === 0) {
      alert('Você não possui notícias cadastradas!')
    }
    else {
      not.innerHTML= '';

      todasNoticias.forEach((noticia, index) => {
        not.innerHTML += `
          <article class="message is-info is-medium">
            <div class="message-header"><h1>Notícia ${index+1}</h1></div>
            <div class="message-body">
              ${noticia} 
            </div>
          </article>
        `
      });
    }
  }) 
}

//4 - Limpar os dados do array todasNoticias
//4.1 - Ocultar o tituloNoticias
//4.2 - Limpar a div id="mostrarNoticias"
const deletarNoticias = function(){
  document.querySelector('#btnDeletar').addEventListener('click', ()=> {
    let not = document.querySelector('#mostrarNoticias');

    for(let i=todasNoticias.length; i>0; i--) {
      todasNoticias.pop();
    }
    not.innerHTML= '';
    document.querySelector("#tituloNoticias").style = "display: none"
    document.querySelector('#qtdNoticias').textContent = 0;
  });
}

//1 - ADICIONAR EVENTOS DE CLICK PARA CADA UM DOS TRES BOTOES DA TELA (btnCadastrarNoticia, btnMostrar, btnDeletar)

cadastrarNoticia();
mostrarNoticias();
deletarNoticias();

