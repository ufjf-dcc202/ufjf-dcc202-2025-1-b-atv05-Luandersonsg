import { getTabuleiro } from "./discos.js";
import { seleciona } from "./discos.js";

    const tagH1 = document.querySelector("h1");
    tagH1.textContent = "Jogo dos Discos";

    const eTabuleiro = criaTabuleiro();
    document.body.append(eTabuleiro);
    
    const tabuleiro = getTabuleiro();

    for( let i = 0; i < 7; i++){
        const eDisco = criaDisco(tabuleiro[i], i);
        eTabuleiro.append(eDisco);        
    }

    function atualizaDiscos(){
        const tabuleiro = getTabuleiro();
        for(let i = 0; i < eTabuleiro.children.length; i++){
            const disco = eTabuleiro.children[i];
            disco.dataset.cor = tabuleiro[disco.dataset.posicao];
        }
    }

    function discoClick(evento){
        const posicao = Number(evento.target.dataset.posicao);
        console.log("Click!" + posicao);
        seleciona(posicao);
        atualizaDiscos();
    }

    function criaDisco(cor, posicao){
        const novoDisco = document.createElement("Div");
        novoDisco.classList.add("disco");
        novoDisco.dataset.cor=cor;
        novoDisco.dataset.posicao=posicao;
        novoDisco.addEventListener("click", discoClick);
        return novoDisco;
    }
    
    function criaTabuleiro(){
        const novoTabuleiro = document.createElement("Div");
        novoTabuleiro.classList.add("tabuleiro");
        return novoTabuleiro;
    }