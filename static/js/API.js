let Limite = 40
let ocupação = 0
let veiculo = []
let minutos = []
let pagamento = []
let His_veiculo = []
let His_time = []

function ENTRADA() {
    let id = document.querySelector("input#eplaca")
    let temp = id.value
    let placa = temp.toUpperCase()

    if (ocupação == Limite) {
        window.alert("Estacionamento Lotado!")
        id.value = ''
        id.focus()
    } else if (placa.length > 8 || placa.length < 7) {
        window.alert("[ERRO] Padrão de placa inválido!")
        id.value = ''
        id.focus()
    } else if (veiculo.indexOf(placa) !== -1) {
        window.alert("Veiculo já foi registrado!")
        id.value = ''
        id.focus()
    } else {
        let data = new Date()
        let hora = data.getHours()
        let min = data.getMinutes()
        veiculo.push(placa)
        minutos.push(((Number(hora) * 60) + Number(min)))
        pagamento.push(false)
        ocupação++
        id.value = ''
        id.focus()
        window.alert("REGISTRADO!")
    }

}

function PAGAMENTO() {
    let id = document.querySelector("input#splaca")
    let temp = id.value
    let placa = temp.toUpperCase()

    if (placa.length > 8 || placa.length < 7) {
        window.alert("[ERRO] Padrão de placa inválido!")
        id.value = ''
        id.focus()
    } else if (veiculo.indexOf(placa) == -1) {
        window.alert("[ERRO] Veiculo não foi registrado!")
        id.value = ''
        id.focus()
    } else {
        let id_veiculo = veiculo.indexOf(placa)
        if (pagamento[id_veiculo] == false) {
            let data = new Date()
            let hora = data.getHours()
            let min = data.getMinutes()
            let saida = Number(hora) * 60 + Number(min)
            let periodo = saida - minutos[id_veiculo]
            let horas = Math.floor(periodo / 60)
            let minut = periodo % 60
            let periodo_estacionado = horas + "h" + minut + "min"
            let confirm = window.confirm(`Confirma o pagamento de ${periodo_estacionado} do veículo ${placa}?`)
            if (confirm == false) {
                id.value = ''
                id.focus()
            } else {
                His_veiculo.push(placa)
                His_time.push(periodo_estacionado)
                pagamento[id_veiculo] = true
                window.alert("PAGAMENTO CONFIRMADO!")
                id.value = ''
                id.focus()
            }
        } else {
            window.alert("[ERRO] Veículo já realizou o pagamento!")
            id.value = ''
            id.focus()
        }
    }
}

function SAIDA() {
    let id = document.querySelector("input#splaca")
    let temp = id.value
    let placa = temp.toUpperCase()

    if (placa.length > 8 || placa.length < 7) {
        window.alert("[ERRO] Padrão de placa inválido!")
        id.value = ''
        id.focus()
    } else if (veiculo.indexOf(placa) == -1) {
        window.alert("[ERRO] Veiculo não foi registrado!")
        id.value = ''
        id.focus()
    } else {
        let id_veiculo = veiculo.indexOf(placa)
        if (pagamento[id_veiculo] == false) {
            window.alert("[ERRO] Veículo não realizou o pagamento!")
            id.value = ''
            id.focus()
        } else {
            let confirmacao = window.confirm(`Confirmar a saida do veículo ${placa}?`)
            if (confirmacao == false) {
                id.value = ''
                id.focus()
            } else {
                veiculo[id_veiculo] = ''
                ocupação--
                window.alert("SAIDA LIBERADA!")
                id.value = ''
                id.focus()
            }
        }
    }
}