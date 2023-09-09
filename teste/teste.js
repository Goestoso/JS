const listaDeNumeros = document.querySelectorAll('input[type=button]'); //seletor do CSS dos buttons
const inputTel = document.querySelector('input[type=tel'); // seletor do input
console.log(listaDeNumeros); //para imprimir o valor no console do browser

for (let index = 0; index < listaDeNumeros.length; ++index) {

    const tecla = listaDeNumeros[index]; //retorna cada button por vez

    tecla.onclick = function() { //função anônima para quando clicar na tecla do index
    inputTel.value += tecla.value; //preencher o valor do input com o atributo value do button

    }

    tecla.onkeydown = function(evento) { //função anômima com parâmetros
        if (evento.code === "Enter" || evento.code === "Space") { //se a tecla for enter ou space

        tecla.classList.add('ativa');

        }
    }
    
    tecla.onkeyup = function() {

        tecla.classList.remove('ativa');
    }
}
