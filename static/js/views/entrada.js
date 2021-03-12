import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Entrada");
    }

    async getHtml() {
        return `       
            <p id="Paragrafo">Número da placa: </p>
            <p><input type="text" class="eplaca" id="eplaca"></p>
            <p><input type="button" value="CONFIRMAR ENTRADA" class="entrada" onclick="ENTRADA()"></p>   
        `;
    }
}