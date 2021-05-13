function ENTRADA() {
    let id = document.querySelector("input#eplaca")
    let placa = Placa(id)
    if (ocupacao == limite) {
        window.alert("Estacionamento Lotado!")
        limpar(id)
    } else if (placa.length > 8 || placa.length < 7) {
        window.alert("[ERRO] Padrão de placa inválido!")
        limpar(id)
    } else if (veiculo.indexOf(placa) !== -1) {
        window.alert("Veiculo já foi registrado!")
        limpar(id)
    } else {
        let data = new Date()
        let hora = data.getHours()
        let min = data.getMinutes()
        veiculo.push(placa)
        entrada.push(((Number(hora) * 60) + Number(min)))
        pagamento.push(false)
        ocupacao++
        limpar(id)
        window.alert("REGISTRADO!")
    }

}