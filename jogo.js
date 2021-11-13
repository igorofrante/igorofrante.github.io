import {colors} from "./colors.js";

document.getElementById("iniciar").addEventListener('click', iniciarJogo);


function iniciarJogo(){
    var cores = colors(); 
    
    var vetorCores = [];
    
    while(vetorCores.length < 10){
        vetorCores[vetorCores.length] = cores[Math.floor(Math.random() * (cores.length - 1)) + 1];
        vetorCores = [...new Set(vetorCores)];
    }
    
    vetorCores.sort();
    
    var corEscolhida = Math.floor(Math.random() * (vetorCores.length - 1)) + 1;
    
    var vetorCores2 = vetorCores.map(vetorCores => vetorCores.toUpperCase());
    
    var bool = false;
    
    var corUsuario;
    
    while (!bool){
        corUsuario = prompt("Eu estou pensando em uma dessas cores: \n" + vetorCores.join(', ') + "\nEm qual delas eu estou pensando?\n" + vetorCores[corEscolhida]);
        corUsuario = corUsuario.toUpperCase();
        if (vetorCores2.indexOf(corUsuario)<1){
            alert("Cor inexistente");
        }else{
            if(corUsuario == vetorCores2[corEscolhida]){
                alert("Você acertou!");
                bool = true;
                document.body.style.background = corUsuario;
                document.getElementById("cor").innerHTML = `A cor é: ${vetorCores[corEscolhida]}`;
            }else{
                let res = corUsuario.localeCompare(vetorCores2[corEscolhida])
                let dica = "Dica: ";
                if (res -1){
                    dica += "a cor escolhida é alfabeticamente maior do que a que você escolheu"
                }else{
                    dica += "a cor escolhida é alfabeticamente menor do que a que você escolheu"
                }
                alert(`Desculpe! Sua resposta não está correta!\n${dica}\nPor favor tente novamente.`);
            }
        }
    }
}





















