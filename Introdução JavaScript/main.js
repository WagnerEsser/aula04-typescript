
const times = []
const jogadores = []

function incluirTime(id, nome, dataCriacao, corUniformePrincipal, corUniformeSecundario){
    times.push({
        id: id,
        dataCriacao: dataCriacao,
        corUniformePrincipal: corUniformePrincipal,
        corUniformeSecundario: corUniformeSecundario,
        jogadores: []
    });
}

function buscarTimePorId(idTime){
    return times.filter(t => t.id == idTime)[0];
}

function incluirJogador(id, idTime, nome, dataNascimento, nivelHabilidade, salario){
    let time = buscarTimePorId(idTime);

    let jogador = {
        id: id,
        idTime: idTime,
        dataNascimento: dataNascimento,
        nivelHabilidade: nivelHabilidade,
        salario: salario
    }

    time.jogadores.push(jogador);
    jogadores.push(jogador);
}

function buscarJogadorPorId(idJogador){
    return jogadores.filter(j => j.id == idJogador)[0];
}

function buscarJogadorMaiorSalario(){
    jogadoresDeTodosTimes = times.map(t => t.jogadores);
    jogadoresDeTodosTimes.sort(bySalario());
    return jogadoresDeTodosTimes[0];
}

function bySalario() {
    return (j1, j2) => {
        if (j1.salario > j2.salario) {
            return 1;
        }
        if (j1.salario < j2.salario) {
            return -1;
        }
        if (j1.id > j2.id){
            return 1;
        } else return 0;
    };
}


/* TESTES */ 

incluirTime(1, "Santos", new Date(1950, 01, 01), "Branco", "Preto e branco");
incluirTime(2, "Corinthians", new Date(1920, 02, 03), "Preto", "Roxo");

incluirJogador(1, 1, "Wagner Esser", new Date(1995, 02, 15), 80, 5000)
incluirJogador(2, 1, "Vinícius", new Date(1995, 01, 17), 68, 3500)
incluirJogador(3, 2, "Bruno", new Date(1995, 03, 10), 70, 4000)
incluirJogador(4, 2, "Iago", new Date(1995, 05, 20), 65, 3800)