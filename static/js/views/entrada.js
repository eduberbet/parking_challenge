import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Entrada");
    }

    async getHtml() {
        return `       
            <p>Esta é a pagina de entrada!</p>    
        `;
    }
}