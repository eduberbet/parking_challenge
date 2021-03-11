import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Saída");
    }

    async getHtml() {
        return `       
            <p>Página de Saida!</p>
            <br><a href="/pagamento" class="nav__link" data-link>Pagamento</a>
            <br><a href="/historico" class="nav__link" data-link>Histórico</a>
        `;
    }
}