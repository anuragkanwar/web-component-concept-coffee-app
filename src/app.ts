import { Store } from "./store/Store.ts";
import { Router } from "./router/Router.ts";
import "./components/index.ts";
import "./features/index.ts";
import { menu } from "./api/menu.js";

window.app = {};
window.app.store = Store;
window.app.router = Router;

async function init() {
  //load data here
  window.app.store.menus = menu.menus;
  window.app.store.cart = {};
  //setup router
  window.app.router.init();
}

window.addEventListener("DOMContentLoaded", init);

