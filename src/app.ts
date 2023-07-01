import { Store } from "./store/Store.ts";
import { Router } from "./router/Router.ts";
import "./components/index.ts";
import "./features/index.ts";

window.app = {};
window.app.store = Store;
window.app.router = Router;

async function init() {
  //load data here
  const result = await fetch("/src/api/menu.json");
  const data = await result.json();
  window.app.store.menus = data.menus;
  window.app.store.cart = {};
  //setup router
  window.app.router.init();
}

window.addEventListener("DOMContentLoaded", init);

