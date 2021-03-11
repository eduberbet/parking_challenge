import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Pagamento");
    }

    async getHtml() {
        return `       
            <p>Esta é a pagina de pagamento!</p>
        `;
    }
}