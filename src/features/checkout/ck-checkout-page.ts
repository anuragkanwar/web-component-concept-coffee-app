import { css, html, LitElement, PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";
import { repeat } from 'lit/directives/repeat.js';
import { Router } from "../../router/Router.ts";

@customElement("ck-checkout")
export class CkCheckoutPage extends LitElement {

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

  trash(ev: Event) {
    // @ts-ignore
    const key = ev.target.getAttribute("key");
    delete window.app.store.cart[key];
    window.app.store.cart = { ...window.app.store.cart };
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

  goToMenu(ev: MouseEvent) {
    ev.preventDefault();
    Router.go("/catalog", "/cart");
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

      button, select {
        padding: 0.2em 1em;
        border: 2px solid black;
        cursor: pointer;
        border-radius: 5px;
      }

      body {
        font-family: 'Alegreya Sans', sans-serif;
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
    `,
    css`
      .cart {
        background: #f6f6f6;
        flex-shrink: 0;
        padding: 1rem;
        width: 30vw;
        display: flex;
        flex-direction: column;
        gap: 1em;
        border-radius: 2rem;
        margin-top: 1rem;
      }

      .cart-main {
        overflow-x: hidden;
        overflow-y: scroll;
        max-height: 50vh;
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

      .counter > div {
        font-size: 1.625rem;
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

      .content, .intro {
        width: 80%;
        margin: 0 auto;
      }

      .content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 2rem;
      }

      .delivery-data {
        flex-basis: 45%;
      }

      .title {
        font-size: 2rem;
      }

      .form {
        display: flex;
        flex-direction: column;
      }


      input {
        width: 100%;
        padding: 0.625rem 1.25rem;
        margin: 8px 0;
        box-sizing: border-box;
        font-size: 1.25rem;
        border-radius: 0.625rem;
        background: transparent;
        border: 1px solid var(--my-selected-orange);
      }

      .order-btn {
        margin-top: 2rem;
        text-align: center;
        padding: 1rem 1.5rem;
        font-size: 1.250rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }

      .subtitle {
        margin-top: 0.5rem;
      }

      .width-2 {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
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
        <section class="checkout">
            <div class="intro">
                <h2 class="title">Check out</h2>
                <a @click=${this.goToMenu} class="back" href="/catalog">Back to menu</a>
            </div>
            <div class="content">
                <div class="delivery-data">
                    <h4 class="subtitle">Shipping Details</h4>
                    <form class="form" action="">
                        <div class="width-2">
                            <input class="input" placeholder="First Name" name="name" type="text"/>
                            <input class="input" placeholder="Last Name" name="name" type="text"/>
                        </div>
                        <input class="input" placeholder="Address Line-1" type="text"/>
                        <input class="input" placeholder="Address Line-2" type="text"/>
                        <input class="input" placeholder="Address Line-3" type="text"/>
                        <input class="input" placeholder="Phone Number" type="tel"/>
                        <div class="checkout-btn order-btn">PLACE ORDER</div>
                    </form>

                    <div class="subtitle">Info will be shared to you by Whatsapp / Call</div>
                </div>
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
                                                <div key=${item} @click=${this.decrement} class="counter-btn">
                                                    <ion-icon name="remove-circle-outline"></ion-icon>
                                                </div>
                                                <div class="counter-count">${data[item]}</div>
                                                <div key=${item} @click=${this.increment} class="counter-btn">
                                                    <ion-icon name="add-circle-outline"></ion-icon>
                                                </div>
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
                        <div class="checkout-btn btn">TOTAL <span><ion-icon
                                name="card-outline"></ion-icon></span></div>
                        <div class="checkout-price">${totalPrice}</div>
                    </div>

                </div>
            </div>
        </section>
    `;
  }
}