let limite = 40 //Limite arbitrario de vagas no estacionamento
let ocupacao = 0 //Estacionamento abre com o patio vazio
let veiculo = [] //Array com os veiculos estacionados
let entrada = [] //Array com o horario (em minutos) dos veiculos estacionados
let pagamento = [] //Array booleano do status de pagamento
let his_veiculo = [] //Arquiva veiculos que pagaram o estacionamento
let his_tempo = [] //Arquiva o tempo que veiculos ficaram no estacionamento
let his_dia = [] //Arquiva o dia que o veiculo ficou estacionado

function limpar(id) { //limpa o campo de input e deixa o cursor lá
    id.value = ''
    id.focus()
}

function PeriodoEstacionado(id_veiculo) { //recebe o id do veiculo e retorna string formatada com o tempo estacionado.
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let agora = Number(hora) * 60 + Number(min)
    let periodo = agora - entrada[id_veiculo]
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