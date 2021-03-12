let Limite = 40 //Limite arbitrario de vagas no estacionamento
let ocupação = 0
let veiculo = [] //Array com os veiculos estacionados
let minutos = [] //Array com o horario (em minutos) dos veiculos estacionados
let pagamento = [] //Array booleano do status de pagamento
let His_veiculo = [] //Arquiva veiculos que pagaram o estacionamento
let His_time = [] //Arquiva o tempo que veiculos ficaram no estacionamento
let His_day = [] //Arquiva o dia que o veiculo ficou estacionado

function limpar(id) { //limpa o campo de input e deixa o cursor lá
    id.value = ''
    id.focus()
}

function PeriodoEstacionado(id_veiculo) { //recebe o id do veiculo e retorna string formatada com o tempo estacionado.
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let now = Number(hora) * 60 + Number(min)
    let periodo = now - minutos[id_veiculo]
    let horas = Math.floor(periodo / 60)
    let minut = periodo % 60
    let periodo_estacionado = horas + "h" + minut + "min"
    return (periodo_estacionado)
}

function Placa(id) {
    let temp = id.value
    let placa = temp.toUpperCase()
    return placa
}

function ENTRADA() {
    let id = document.querySelector("input#eplaca")
    let placa = Placa(id)
    if (ocupação == Limite) {
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
        minutos.push(((Number(hora) * 60) + Number(min)))
        pagamento.push(false)
        ocupação++
        limpar(id)
        window.alert("REGISTRADO!")
    }

}

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
            let day = data.getDay() + "/" + data.getMonth()
            let periodo_estacionado = PeriodoEstacionado(id_veiculo)
            let confirm = window.confirm(`Confirma o pagamento de ${periodo_estacionado} do veículo ${placa}?`)
            if (confirm == false) {
                limpar(id)
            } else {
                His_veiculo.push(placa)
                His_time.push(periodo_estacionado)
                His_day.push(day)
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
                ocupação--
                window.alert("SAIDA LIBERADA!")
                limpar(id)
            }
        }
    }
}

function HISTORICO() {
    let id = document.querySelector("input#hplaca")
    let placa = Placa(id)
    let historico = document.getElementById("his")

    if (placa.length > 8 || placa.length < 7) {
        window.alert("[ERRO] Padrão de placa inválido!")
        limpar(id)
    } else if (His_veiculo.indexOf(placa) == -1 || veiculo.indexOf(placa) == -1) {
        window.alert("[ERRO] Veiculo não encontrado!")
        limpar(id)
    } else {
        limpar(id)
        historico.innerHTML = ``
        historico.innerHTML = `<p> </p>`
        historico.innerHTML += `Placa: ${placa}`
        historico.innerHTML += `<p> </p>`
        for (var pos in veiculo) {
            if (veiculo[pos] == placa) {
                let periodo_estacionado = PeriodoEstacionado(pos)
                historico.innerHTML += `<p>Tempo Atual: ${periodo_estacionado}</p>`
            }
        }
        for (var pos in His_veiculo) {
            if (His_veiculo[pos] == placa) {
                historico.innerHTML += `<p>Dia/Mês: ${His_day[pos]} - Tempo Total: ${His_time[pos]}</p>`
            }
        }
        historico.innerHTML += `FIM DO HISTÓRICO`
    }
}