function HISTORICO() {
    let id = document.querySelector("input#hplaca")
    let placa = Placa(id)
    let historico = document.getElementById("his")

    if (placa.length > 8 || placa.length < 7) {
        window.alert("[ERRO] Padrão de placa inválido!")
        limpar(id)
    } else if (his_veiculo.indexOf(placa) == -1 && veiculo.indexOf(placa) == -1) {
        window.alert("[ERRO] Veiculo não encontrado!")
        limpar(id)
    } else {
        limpar(id)
        historico.innerHTML = ``
        historico.innerHTML = `<p> </p>`
        historico.innerHTML += `Placa: ${placa}`
        historico.innerHTML += `<p> </p>`
        for (var posicao in veiculo) {
            if (veiculo[posicao] == placa) {
                let periodo_estacionado = PeriodoEstacionado(posicao)
                historico.innerHTML += `<p>Tempo Atual: ${periodo_estacionado}</p>`
            }
        }
        for (var posicao in his_veiculo) {
            if (his_veiculo[posicao] == placa) {
                historico.innerHTML += `<p>Dia/Mês: ${his_dia[posicao]} - Tempo Total: ${his_tempo[posicao]}</p>`
            }
        }
        historico.innerHTML += `FIM DO HISTÓRICO`
    }
}