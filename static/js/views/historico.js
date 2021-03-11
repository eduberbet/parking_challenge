import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Histórico");
    }

    async getHtml() {
        return `       
            <p>Pagina de Histórico</p>
        `;
    }
}