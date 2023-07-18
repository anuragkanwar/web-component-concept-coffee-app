import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Router } from "../../router/Router.ts";
import { query } from 'lit/decorators/query.js';
import logoText from "../../assets/images/logo-text.png";
import tippy from 'tippy.js';

@customElement("ck-nav-menu")
export default class CkNavMenu extends LitElement {

  @query(".header")
    // @ts-ignore
  header;

  @query("#primary-navigation")
    // @ts-ignore
  primaryNav;

  @query(".mobile-nav-toggle")
    // @ts-ignore
  navToggle;

  @query(".ck-cart-count")
    // @ts-ignore
  cartCount;


  @property({ reflect: true, attribute: "activepage" })
  activePage: string = "/";

  @state()
  isNavOpen = false;

  _handleRoute(ev: Event) {
    ev.preventDefault();
    if (ev.target) {
      // @ts-ignore
      Router.go(ev.target.pathname, location.pathname);
    }
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("ck-cart-change", () => {
      let count = 0;
      for (let keys in window.app.store.cart) {
        count += window.app.store.cart[keys];
      }
      if (count > 0) {
        this.cartCount.innerText = count;
        this.cartCount.classList.remove("hidden");
      } else {
        this.cartCount.classList.add("hidden");
      }
    });
  }

  handleNavToggle() {
    const primaryNav = this.primaryNav;
    const navToggle = this.navToggle;
    if (!primaryNav) return;
    if (!navToggle) return;
    const visibility = primaryNav.dataset.visible;
    if (visibility === "false") {
      primaryNav.dataset.visible = "true";
      this.isNavOpen = true;
      navToggle.setAttribute("aria-expanded", "true");
    } else {
      primaryNav.dataset.visible = "false";
      this.isNavOpen = false;
      navToggle.setAttribute("aria-expanded", "false");
    }
  }

  handleSpecialRoute(ev: MouseEvent) {
    if (!ev.target) return;
    // @ts-ignore
    if (ev.target.classList.contains("ck-cart")) {
      // Router.go("/cart", location.pathname);
      if (Object.keys(window.app.store.cart).length > 0) {
        window.dispatchEvent(new Event("ck-cart-toggle"));
      }
      // @ts-ignore
    } else if (ev.target.classList.contains("ck-user")) {
      Router.go("/user", location.pathname);
    } else {
      ev.preventDefault();
      Router.go("/", location.pathname);
    }
  }

  handleTooltip(ev: Event) {

    if (!ev.target) return;
    // @ts-ignore
    tippy(ev.target, {
      content: 'Frontend Concept Only',
      arrow: true,
    });
  }

  static styles =
    [
      css`
        html {
          box-sizing: border-box;
        }

        *, *::after, *::before {
          margin: 0;
          padding: 0;
          border: 0;
          font-family: inherit;
          box-sizing: inherit;
        }

        ul, ol {
          list-style: none;
        }

        a {
          text-decoration: none;
          color: inherit
        }

        a:hover {
          border-bottom: 2px solid;
        }

        path, i, svg {
          pointer-events: none;
        }

        button, select {
          padding: 0.2em 1em;
          border: 2px solid black;
          cursor: pointer;
          border-radius: 5px;
        }

        body {
          font-family: 'Alegreya Sans', sans-serif;

        }

        header {
          align-items: center;
          justify-content: space-between;
          position: fixed;
          width: 100%;
          z-index: 1000;
          height: 86px;
          padding: 0 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }

        .logo {
          margin: 1rem;
          width: 2rem;
        }

        .logo-img {
          width: 100%;
          object-fit: cover;
        }

        .primary-navigation {
          flex-grow: 1;
          padding-block: 2rem;
          padding-inline: clamp(3rem, 8vw, 10rem);
          height: 86px;
        }


        .user-actions {
          flex-grow: 0.2;
          font-size: 1.5rem /* 24/16 */;
          //background: hsl(0, 0%, 100%, 0.1);
          //backdrop-filter: blur(1rem);
          align-items: center;
        }


        .user-actions > li {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .flex {
          display: flex;
          gap: 1rem;
        }

        nav {
          flex-grow: 1;
        }

        .nlink {
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 400;
          font-size: 1rem;
        }

        .nlink > span {
          font-weight: 400;
          margin-inline-end: 0.5em;
        }

        .mobile-nav-toggle {
          display: none;
        }


        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }

        ion-icon {
          pointer-events: none;
        }


        @media (max-width: 37em) {
          .primary-navigation {
            position: fixed;
            inset: 0 0 0 100%;
            gap: 2em;
            width: 14rem;
            flex-direction: column;
            padding: min(20vh, 10rem) 2rem;
            z-index: 1000;
            transition: all ease-in-out 0.3s;
            background: hsla(0, 0%, 96%, 0.1);
            backdrop-filter: blur(1rem);
            height: 100%;
          }

          .primary-navigation[data-visible='true'] {
            transform: translateX(-100%);
          }

          .mobile-nav-toggle {
            display: block;
            z-index: 9999;
            position: absolute;
            font-size: 1.5rem;
            padding: 0;
            top: 2rem;
            right: 2rem;
            border: none;
            cursor: pointer;
          }
        }

        .active {
          color: var(--my-selected-orange);
          border-bottom: 2px solid;
        }

        .no-border, .no-border:hover {
          border: none;
        }

        .color-black {
          color: black;
        }
      `,
      css`

        .ck-cart {
          position: relative;
        }

        .ck-cart-count {
          position: absolute;
          top: -10px;
          left: 15px;
          background: var(--my-red);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
          height: 20px;
          width: 20px;
          z-index: 10;
          font-size: 1rem;
          pointer-events: none;
        }

        .hidden {
          display: none;
        }

      `
    ];


  render() {
    return html`
        <header class="header flex color-white">
            <div class="logo">
                <a class="no-border" href="/">
                    <img class="logo-img"
                         src=${logoText}
                         alt="LOGO">
                </a>
            </div>
            <div @click=${this.handleNavToggle} class="mobile-nav-toggle" aria-expanded="false"
                 aria-controls="primary-navigation">
                ${this.isNavOpen ? html`
                    <ion-icon name="close-outline"></ion-icon>` : html`
                    <ion-icon name="menu-outline"></ion-icon>`}
                <span class="sr-only">Menu</span>
            </div>
            <nav>
                <div data-visible="false" class="flex">
                    <ul id="primary-navigation" class="primary-navigation flex">
                        <li><a @click=${this._handleRoute} class="nlink" href="/">Home</a></li>
                        <li><a @click=${this._handleRoute} class="nlink" href="/catalog">Catalog</a></li>
                    </ul>
                    <ul class="user-actions flex">
                        <li @mouseover=${this.handleTooltip} class="ck-user">
                            <ion-icon name="person-outline"></ion-icon>
                        </li>
                        <li @click=${this.handleSpecialRoute} class="ck-cart">
                            <span class="ck-cart-count"></span>
                            <ion-icon name="cart-outline"></ion-icon>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    `;
  }
}

