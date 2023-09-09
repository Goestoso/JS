//main para arquivos principais do JS

function tocaSom(seletorAudio){ //declaração de função no JS (com parâmetros)

   const element = document.querySelector(seletorAudio); //play é a propriedade (função) que faz uma execução do documento  selecionado (no caso, reproduz um audio)

   if (element && element.localName === 'audio') { // se o elemento retornar um valor nulo

        element.play();

   } else { //se o elemento não retornar valor nulo

        alert('Elemento não encontrado!');
        console.log('Elemento não encontrado!');
   }
}

                            //querySelectorAll para selecionar todos os atributos com a class .tecla

const listaDeTeclas = document.querySelectorAll('.tecla');  //referência constante

//para //let para varíaveis incrementais
for (let cont = 0; cont < listaDeTeclas.length; cont++) {

    const tecla = listaDeTeclas[cont];

    const instrumento = tecla.classList[1]; //classList retorna as classes atribuídas ao elemento 

    //template string
    const idAudio = `#som_${instrumento}`; //crase indica o início de uma template string no JavaScript. As template strings permitem criar strings que podem conter expressões interpoladas.

    console.log(idAudio);

                //[] para selecionar um elemento da lista (array)
    listaDeTeclas[cont].onclick = function() { //function é uma função anônima (sem nome) //essas funções sem nome só podem ser utilizadas nesse contexto de quando elas são o valor de algum atributo ou estão sendo armazenadas dentro de alguma referência constante ou variável. 
        tocaSom(idAudio); // quando criamos uma função não a invocamos imediatamente, só criamos e declaramos que ela existe naquele contexto, naquele momento.

    }

    console.log(cont); //para imprimir o a iteração do contador no browser

            //quando qualquer tecla for pressionada
    tecla.onkeydown = function(evento) {

        console.log(evento); //imprime o evento do DOM (Document Object Model) (tecla) e seus atributos que estão acontecendo nesse instante
        
        if (evento.code === 'Space' || evento.code === 'Enter') {//=== comparador mais seguro

            tecla.classList.add('ativa');
        }

    }
            //quando qualquer tecla deixar de ser pressionada 
    tecla.onkeyup = function () {

        tecla.classList.remove('ativa');
    }

}

//alert('Olá mundo'); //alert para imprimir uma mensagem na tela do browser

//document.querySelector('.tecla_pom').onclick = tocaSomPom; //document refere-se ao objeto global do HTML //. para acessar próximos métodos e propriedades //querySelector é um método do objeto document que permite selecioanr elementos no HTML // ('') é o seletor CSS passado ao argumento querySelector // onclick refere-se a propriedade de clicar num botão // = tocaSomPom refere-se a uma atribuição de função ao onclick




