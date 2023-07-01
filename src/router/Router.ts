import CkHomePage from "../features/home/ck-home-page.ts";
import { CkCatalog } from "../features/catalog/ck-catalog.ts";
import { CkCheckoutPage } from "../features/checkout/ck-checkout-page.ts";

export const Router = {
  init: () => {
    const links = document.querySelectorAll<HTMLAnchorElement>(".nlink");
    links.forEach(link => {
      link.addEventListener("click", (ev) => {
        ev.preventDefault();
        Router.go(link.pathname, location.pathname);
      });
    });

    // event handler for ui changes
    window.addEventListener("popstate", (ev) => {
      Router.go(ev.state.route, location.pathname, false);
    });


    //check the initial url
    Router.go("/", "");
  },

  go: (route: string, prvRoute: string, addToHistory: boolean = true) => {


    if (addToHistory) {
      history.pushState({ route }, "", route);
    }

    let currentPageToDisplay: HTMLElement;
    switch (route) {
      case "/":
        currentPageToDisplay = new CkHomePage();
        break;
      case "/catalog":
        currentPageToDisplay = new CkCatalog();
        break;
      case "/cart"  :
        currentPageToDisplay = document.createElement("h1");
        currentPageToDisplay.textContent = "Order";
        break;
      case "/user"  :
        currentPageToDisplay = document.createElement("h1");
        currentPageToDisplay.textContent = "User";
        break;
      case "/about"  :
        currentPageToDisplay = document.createElement("h1");
        currentPageToDisplay.textContent = "About";
        break;
      case "/checkout"  :
        currentPageToDisplay = document.createElement("h1");
        currentPageToDisplay = new CkCheckoutPage();
        break;
      default:
        if (/^\/product/.test(route)) {
          currentPageToDisplay = document.createElement("h1");
          const id = route.substring(route.lastIndexOf("/") + 1);
          currentPageToDisplay.textContent = `Details for ${id}`;
          currentPageToDisplay.dataset.id = id;
          break;
        }
        currentPageToDisplay = document.createElement("h1");
        currentPageToDisplay.textContent = "Error";
    }

    let app = document.querySelector<HTMLDivElement>("#coffee-app");
    if (!app) return;
    if (prvRoute !== route) {
      app.innerHTML = "";
      app.appendChild(currentPageToDisplay);
      window.scrollTo({ top: 0, left: 0 });

      const navigation = document.querySelector("ck-nav-menu");
      if (navigation) {
        navigation.setAttribute("activepage", route);
        let header;
        if (navigation.shadowRoot) {
          header = navigation.shadowRoot.querySelector("header");
        }
        if (header) {
          const links = header.querySelectorAll("a");
          links.forEach((link: any) => {
            if (link.classList.contains("active")) {
              link.classList.remove("active");
            }
          });

          links.forEach((link: any) => {
            if (link.pathname === route) {
              link.classList.add("active");
            }
          });
        }
      }

    }

  }
};


