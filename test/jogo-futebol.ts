import {JogoDeFutebol} from './../src/jogo-futebol'
    
describe("Inclusão de jogador", () => {

    it("Adicionar jogador com sucesso", () => {
        const jogo = new JogoDeFutebol();
        jogo.incluirTime(1, "Santos", new Date(1950, 1, 1), "Branco", "Preto e branco");
    });
});