import { css, html, LitElement, PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";
import { repeat } from 'lit/directives/repeat.js';
import { Router } from "../../router/Router.ts";


@customElement("ck-cart")
export default class CkCart extends LitElement {

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("ck-cart-change", () => {
      this.requestUpdate();
    });

    window.addEventListener("ck-cart-toggle", () => {
      this.classList.toggle("show");
    });

    window.addEventListener("ck-cart-empty", () => {
      this.classList.remove("show");
    });
  }


  @state()
  data: any;

  protected willUpdate(_changedProperties: PropertyValues) {
    super.willUpdate(_changedProperties);
    this.data = window.app.store.cart;
  }

  increment(ev: Event) {
    // @ts-ignore
    const key = ev.target.getAttribute("key");
    if (Object.keys(window.app.store.cart).includes(key)) {
      window.app.store.cart = { ...window.app.store.cart, [key]: window.app.store.cart[key] + 1 };
    } else {
      window.app.store.cart = { ...window.app.store.cart, [key]: 1 };
    }
  }

  checkout() {
    this.classList.toggle("show");
    Router.go("/checkout", location.pathname);
  }

  decrement(ev: Event) {
    // @ts-ignore
    const key = ev.target.getAttribute("key");
    if (Object.keys(window.app.store.cart).includes(key)) {
      window.app.store.cart = { ...window.app.store.cart, [key]: window.app.store.cart[key] - 1 };
    } else {
      window.app.store.cart = { ...window.app.store.cart, [key]: 1 };
    }
    if (window.app.store.cart[key] === 0) {
      delete window.app.store.cart[key];
      window.app.store.cart = { ...window.app.store.cart };
    }
  }

  closeCart() {
    this.classList.toggle("show");
  }

  trash(ev: Event) {
    // @ts-ignore
    const key = ev.target.getAttribute("key");
    delete window.app.store.cart[key];
    window.app.store.cart = { ...window.app.store.cart };
  }

  static styles = [
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
      

      body {
        font-family: 'Alegreya Sans', sans-serif;
      }
    `,
    css`
      :host {
        position: absolute;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100%;
        z-index: 9999;
        display: flex;
        transition: transform 0.4s ease-in-out;
      }

      :host(.show) {
        transform: translateX(-100%);
      }

      .cart-overlay {
        flex-grow: 1;
        background: #f6f6f6;
        opacity: 0.4;
      }

      .cart {
        background: #f6f6f6;
        flex-shrink: 0;
        padding: 1rem;
        width: 30vw;
        display: flex;
        flex-direction: column;
        gap: 1em;
      }

      .cart-main {
        overflow-x: hidden;
        overflow-y: scroll;
        max-height: 85%;
      }

      .cart-heading {
        font-size: 2rem;
        flex-basis: 5%;
      }

      .item-name {
        font-weight: 500;
      }

      .cart-item {
        display: flex;
        justify-content: center;
        padding: 0.5rem 0;
      }

      .cart-img {
        width: 100px;
        aspect-ratio: 1 / 1;
        flex-shrink: 0;
      }

      .cart-img img {
        height: 100%;
        width: 100%;
        display: block;
        object-fit: cover;
      }

      .cart-content {
        display: flex;
        flex-grow: 1;
        justify-content: left;
        margin: 0 1rem;
        padding: 0.625rem 0;
      }

      .counter {
        display: flex;
        align-items: center;
        gap: 1em;
        text-align: center;
      }

      .counter > button {
        border-radius: 100%;
        background: transparent;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      .counter > div {
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      ion-icon {
        pointer-events: none;
      }

      .cart-l-data, .cart-r-data {
        flex-basis: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .cart-r-data {
        flex-basis: 40%;
        align-items: flex-end;
        font-size: 1.625rem;
      }

      .cart-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
      }

      .checkout-btn {
        display: inline-flex;
        padding: 0.625rem 2.5rem;
        background: var(--my-red);
        font-size: 1rem;
        align-items: center;
        flex-basis: 10%;
        cursor: pointer;
        transform: scale(1);
        will-change: transform;
        transition: all 0.2s ease-in-out;
      }

      .checkout-btn:hover {
        transform: scale(1.05);
      }

      .checkout-btn:active {
        transform: scale(1);
      }

      .checkout-btn span {
        display: inline-grid;
        place-items: center;
        font-size: 1rem;
        margin-left: 0.625rem;
      }

      .checkout-price {
        font-size: 2rem;
        color: var(--my-blush);
        font-weight: bolder;
        vertical-align: center;
      }


    `,
    css`
      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }

      ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
      }

      ::-webkit-scrollbar-thumb {
        background: #1f3933;
        border: 1px solid #ffffff;
        border-radius: 0px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #000000;
      }

      ::-webkit-scrollbar-thumb:active {
        background: #1f3933;
      }

      ::-webkit-scrollbar-track {
        background: #f6eee1;
        border: 0px none #ffffff;
        border-radius: 43px;
      }

      ::-webkit-scrollbar-track:hover {
        background: #f6eee1;
      }

      ::-webkit-scrollbar-track:active {
        background: #f6eee1;
      }

      ::-webkit-scrollbar-corner {
        background: transparent;
      }
    `
  ];


  render() {
    const mainData = window.app.store.menus;
    const data = window.app.store.cart;
    const keys = Object.keys(data);
    const getProduct = (item: string) => {
      return mainData[0].children[item[0]].children[item[1]].products[item[2]];
    };
    const totalPrice = keys.reduce((acc, val) => {
      acc += (getProduct(val).price * data[val]);
      return acc;
    }, 0);
    return html`
        <div @click=${this.closeCart} class="cart-overlay"></div>
        <div class="cart">
            <h2 class="cart-heading">CART</h2>
            <div class="cart-main">

                ${repeat(keys, (key) => key, (item: any) => {
                    return html`
                        <div class="cart-item">
                            <div class="cart-img">
                                <img src=${getProduct(item).assets.masterImage.uri}
                                     alt="">
                            </div>
                            <div class="cart-content">
                                <div class="cart-l-data">
                                    <span class="item-name">${getProduct(item).name}</span>
                                    <div class="counter">
                                        <button key=${item} @click=${this.decrement} class="counter-btn">
                                            <ion-icon name="remove-circle-outline"></ion-icon>
                                        </button>
                                        <div class="counter-count">${data[item]}</div>
                                        <button key=${item} @click=${this.increment} class="counter-btn">
                                            <ion-icon name="add-circle-outline"></ion-icon>
                                        </button>
                                    </div>
                                </div>
                                <div class="cart-r-data">
                                    <div key=${item} @click=${this.trash} class="trash">
                                        <ion-icon name="trash-outline"></ion-icon>
                                    </div>
                                    <div class="sub-price">${data[item] * getProduct(item).price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                })}
            </div>
            <div class="cart-bottom">
                <div @click=${this.checkout} class="checkout-btn btn">CHECKOUT <span><ion-icon
                        name="card-outline"></ion-icon></span></div>
                <div class="checkout-price">${totalPrice}</div>
            </div>

        </div>
    `;
  }
}