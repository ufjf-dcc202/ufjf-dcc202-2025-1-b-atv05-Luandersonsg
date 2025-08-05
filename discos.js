const tabuleiro = ["preto", "preto", "preto", "transparente", "branco", "branco", "branco",];

let selecionado = null;

export function seleciona(posicao) {
    if (selecionado === null) {
        selecionado = posicao;
    } 
    else if (selecionado === posicao) {
        selecionado = null;
    } 
    else {
        mover(selecionado, posicao);
        selecionado = null;
    }
}

export function getTabuleiro() {
    return [...tabuleiro];
}

function mover(origem, destino) {
    if (tabuleiro[destino] !== "transparente") return;
    
    const diff = destino - origem;
    const absDiff = Math.abs(diff);
    
    if (absDiff === 1) {} 
    
    else if (absDiff === 2) {
        const intermediario = origem + (diff / 2);
        if (tabuleiro[intermediario] === "transparente") {
            return;
        }
    } 
    else {
        return;
    }
    
    tabuleiro[destino] = tabuleiro[origem];
    tabuleiro[origem] = "transparente";
}