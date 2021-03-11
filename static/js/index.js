import Entrada from "./views/entrada.js"
import Pagamento from "./views/pagamento.js"
import Saida from "./views/saida.js"
import Historico from "./views/historico.js"

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async() => {
    const routes = [
        { path: "/", view: Entrada },
        { path: "/pagamento", view: Pagamento },
        { path: "/saida", view: Saida },
        { path: "/historico", view: Historico },
    ];
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: route[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    console.log(match)
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
})