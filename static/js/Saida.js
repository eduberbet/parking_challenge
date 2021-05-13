function SAIDA() {
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
            window.alert("[ERRO] Veículo não realizou o pagamento!")
            limpar(id)
        } else {
            let confirmacao = window.confirm(`Confirmar a saida do veículo ${placa}?`)
            if (confirmacao == false) {
                limpar(id)
            } else {
                veiculo[id_veiculo] = ''
                ocupacao--
                window.alert("SAIDA LIBERADA!")
                limpar(id)
            }
        }
    }
}