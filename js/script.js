import { renderPizzas } from "./modules/renderPizzas.js";
import { renderToppings } from "./modules/renderToppings.js";
import { toppingToogle } from "./modules/toppingToogle.js";






const init = () => {
    console.log('init')
    toppingToogle();
    renderToppings();
    renderPizzas();
};

init();