//main para arquivos principais do JS

function tocaSomPom(){ //declaração de função no JS

    document.querySelector('#som_tecla_pom').play(); //play é a propriedade (função) que faz uma execução do documento  selecionado (no caso, reproduz um audio)


}

                     //querySelectorAll para selecionar todos os atributos com a class .tecla

const listaDeTeclas = document.querySelectorAll('.tecla');  //referência constante

listaDeTeclas[0].onclick = tocaSomPom; //[] para selecionar um elemento da lista (array)

//alert('Olá mundo'); //alert para imprimir uma mensagem na tela do browser

//document.querySelector('.tecla_pom').onclick = tocaSomPom; //document refere-se ao objeto global do HTML //. para acessar próximos métodos e propriedades //querySelector é um método do objeto document que permite selecioanr elementos no HTML // ('') é o seletor CSS passado ao argumento querySelector // onclick refere-se a propriedade de clicar num botão // = tocaSomPom refere-se a uma atribuição de função ao onclick




