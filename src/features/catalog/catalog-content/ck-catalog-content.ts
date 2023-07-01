import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from 'lit/directives/repeat.js';


@customElement("ck-catalog-content")
export default class CkCatalogContent extends LitElement {

  @property({ reflect: true, attribute: "cat-id" })
  catId: string = "0";

  @property({ reflect: true, attribute: "sub-cat-id" })
  subCatId: string = "0";

  static styles = [
    css`
      html {
        box-sizing: border-box;
        scroll-behavior: smooth;
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
      .catalog-content {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1em;
        padding: 1em;
      }

      @media only screen and (max-width: 1000px) {
        .catalog-content {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media only screen and (max-width: 700px) {
        .catalog-content {
          grid-template-columns: repeat(1, 1fr);
        }
      }
    `,

  ];


  render() {
    const data = window.app.store.menus[0].children[this.catId].children[this.subCatId];
    return html`
        <div class="catalog-content">
            ${repeat(data.products, (item) => item.productNumber, (item: any, index: number) => {
                return html`
                    <ck-content-card catid=${this.catId} id=${item.productNumber} subcatid=${this.subCatId}
                                     productid=${index}></ck-content-card>
                `;
            })}
        </div>
    `;


  }
}