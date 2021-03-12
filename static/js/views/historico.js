import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Histórico");
    }

    async getHtml() {
        return `
            <p id="Paragrafo">Número da placa: </p>
            <p><input type="text" class="splaca" id="hplaca"></p>
            <p><input type="button" value="VER HISTÓRICO" class="historico" onclick="HISTORICO()"></p>
            <p><div id="his"></div></p>
        `
    }
}