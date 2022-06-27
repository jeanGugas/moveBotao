// obtém referência para o objeto que deve ser movido
const pontinho = document.querySelector("#pontinho");

//valores de inicio da posição
pontinho.style.left = 0;
pontinho.style.top = 0;

function moverBotao(direcao){
    //valores atuais do pontinho
    let left = parseInt(pontinho.style.left);
    let top = parseInt(pontinho.style.top);

    switch(direcao){
        case 38:
        case "^":
            top -= 20;
            break;
        case 40:
        case "v":
            top += 20;
            break;
        case 37:
        case "&lt;":
            left -= 20;
            break;
        case 39:
        case "&gt;":
            left += 20;
            break;
        default:
            console.log(direcao);
    }

    pontinho.style.top = top + "px";
    pontinho.style.left = left + "px";
}


document.body.onkeydown = function(tecla){
    moverBotao(tecla.keyCode);

}