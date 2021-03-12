import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Saída");
    }

    async getHtml() {
        return ` 
            <p id="Paragrafo">Número da placa: </p>
            <p><input type="text" class="splaca" id="splaca"></p>
            <p><input type="button" value="PAGAMENTO" class="pagamento" onclick="PAGAMENTO()"></p>         
            <p><input type="button" value="SAÍDA" class = "saida" onclick="SAIDA()"></p>
        `;
    }
}