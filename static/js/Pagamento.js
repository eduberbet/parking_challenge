function PAGAMENTO() {
    let id = document.querySelector("input#splaca")
    let placa = Placa(id)

    if (placa.length > 8 || placa.length < 7) {
        window.alert("[ERRO] Padrão de placa inválido!")
        limpar(id)
    } else if (veiculo.indexOf(placa) == -1) {
        window.alert("[ERRO] Veiculo não foi registrado!")
        limpar(id)
    } else {
        let id_veiculo = veiculo.indexOf(placa)
        if (pagamento[id_veiculo] == false) {
            let data = new Date()
            let dia = data.getDay() + "/" + data.getMonth()
            let periodo_estacionado = PeriodoEstacionado(id_veiculo)
            let confirmacao = window.confirm(`Confirma o pagamento de ${periodo_estacionado} do veículo ${placa}?`)
            if (confirmacao == false) {
                limpar(id)
            } else {
                his_veiculo.push(placa)
                his_tempo.push(periodo_estacionado)
                his_dia.push(dia)
                pagamento[id_veiculo] = true
                window.alert("PAGAMENTO CONFIRMADO!")
                limpar(id)
            }
        } else {
            window.alert("[ERRO] Veículo já realizou o pagamento!")
            limpar(id)
        }
    }
}