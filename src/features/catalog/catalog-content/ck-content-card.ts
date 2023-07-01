import { css, html, LitElement, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";


@customElement("ck-content-card")
export default class CkContentCard extends LitElement {

  @property({ reflect: true })
    // @ts-ignore
  id: string;

  @property({ reflect: true })
    // @ts-ignore
  productId: string;

  @property({ reflect: true })
    // @ts-ignore
  catId: string;

  @property({ reflect: true })
    // @ts-ignore
  subCatId: string;

  static styles = [
    css`
      html {
        scroll-behavior: smooth;
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
        font-family: 'Inter', sans-serif;
      }

    `,
    css`
      .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 500px;
        color: black;
        background: white;
        border-radius: 1rem;
        position: relative;
        overflow: hidden;
        max-width: 370px;
        margin: 0 auto;

      }

      .img-circle {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 500px;
        aspect-ratio: 1 / 1;
        background: var(--my-dark-slate-grey);
        border-radius: 100%;
      }

      .img-wrapper {
        border-radius: 1rem 1rem 0 0;
        width: 100%;
        flex-basis: 50%;
        position: relative;
      }

      .img-wrapper-inner {
        overflow: hidden;
        width: 70%;
        position: absolute;
        top: -10%;
        left: -10%;
        clip-path: circle(50%);
      }

      .img-wrapper.active {
        clip-path: circle(40%);
      }

      img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        object-position: center;
      }

      .card-content {
        flex-basis: 50%;
        //flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem;
      }

      .card-info {
        display: flex;
        gap: 1rem;
        width: 100%;
      }

      .product-name {
        flex-basis: 50%;
        flex-shrink: 0;
        text-align: left;
      }

      .product-price {
        flex-basis: 40%;
        flex-shrink: 0;
        text-align: right;
        color: var(--my-selected-orange);
      }

      .counter {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
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
    `];

  @property({ reflect: true, attribute: "count" })
    // @ts-ignore
  _count: number = 0;


  @state()
  data: any;


  giveKey(ev: Event) {
    if (!ev.target) return;
    // @ts-ignore
    const catId = ev.target.getAttribute("catid");
    // @ts-ignore
    const subCatId = ev.target.getAttribute("subcatid");
    // @ts-ignore
    const productId = ev.target.getAttribute("productId");
    return "" + catId + subCatId + productId;

  }

  increment(ev: Event) {
    if (!ev.target) return;
    this._count = this._count + 1;
    let key = this.giveKey(ev);
    if (key) {
      if (Object.keys(window.app.store.cart).includes(key)) {
        window.app.store.cart = { ...window.app.store.cart, [key]: window.app.store.cart[key] + 1 };
      } else {
        window.app.store.cart = { ...window.app.store.cart, [key]: 1 };
      }
    }
  }

  decrement(ev: Event) {
    let key = this.giveKey(ev);
    if (!key) return;
    if (this._count > 0) {
      this._count = this._count - 1;
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
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("ck-cart-change", () => {
      this.requestUpdate();
      this._count = Object.keys(window.app.store.cart).includes("" + this.catId + this.subCatId + this.productId) ? window.app.store.cart["" + this.catId + this.subCatId + this.productId] : 0;
    });
    this._count = Object.keys(window.app.store.cart).includes("" + this.catId + this.subCatId + this.productId) ? window.app.store.cart["" + this.catId + this.subCatId + this.productId] : 0;
  }

  protected willUpdate(_changedProperties: PropertyValues) {
    super.willUpdate(_changedProperties);
    this.data = window.app.store.menus[0].children[this.catId].children[this.subCatId].products[this.productId];
  }

  render() {
    return html`
        <div class="card">
            <div class="img-circle"></div>
            <div class="img-wrapper">
                <div class="img-wrapper-inner">
                    <img src=${this.data.assets.masterImage.uri} alt="">
                </div>
            </div>
            <div class="card-content">
                <div class="card-info">
                    <h2 class="product-name">${this.data.name}</h2>
                    <h2 class="product-price">₹ ${this.data.price}</h2>
                </div>
                <div class="counter">
                    <div
                            catid=${this.catId} subcatid=${this.subCatId} productId=${this.productId}
                            @click=${this.decrement} class="counter-btn">
                        <ion-icon name="remove-circle-outline"></ion-icon>
                    </div>
                    <div class="counter-count">${this._count}</div>
                    <div
                            catid=${this.catId} subcatid=${this.subCatId} productId=${this.productId}
                            @click=${this.increment} class="counter-btn">
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="cart-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    `;
  }

}
