import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Entrada");
    }

    async getHtml() {
        return `       
            <p>Número da placa: </p>
            <input type="text" name="eplaca" id="eplaca">
            <br><input type="button" value="CONFIRMAR ENTRADA" onclick="ENTRADA()">   
        `;
    }
}