const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12

const botoes = document.querySelectorAll('.parametro-senha__botao')

botoes[0].onclick = diminuirTamanho;
botoes[1].onclick = aumentarTamanho;

function diminuirTamanho(){
    if(tamanhoSenha > 1){
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
};

function aumentarTamanho(){
    if(tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
};

const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKNMOPQRSTUVWXYZ';


geraSenha();

function geraSenha(){
    let senha = '';
    for(let i = 0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas [numeroAleatorio];
    }
    campoSenha.value = senha;
}


