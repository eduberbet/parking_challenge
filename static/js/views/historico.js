import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Histórico");
    }

    async getHtml() {
        return `
            <p>Número da placa: </p>
            <input type="text" name="splaca" id="hplaca">
            <br><input type="button" value="VER HISTÓRICO" onclick="HISTORICO()">
            <br><div id="his"></div>
        `
    }
}