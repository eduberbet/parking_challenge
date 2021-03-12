import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Saída");
    }

    async getHtml() {
        return ` 
            <p>Número da placa: </p>
            <input type="text" name="splaca" id="splaca">
            <br><input type="button" value="PAGAMENTO" onclick="PAGAMENTO()">         
            <br><input type="button" value="SAÍDA" onclick="SAIDA()">
            <br><a href="/historico" class="nav__link" data-link>VER HISTÓRICO</a>
        `;
    }
}