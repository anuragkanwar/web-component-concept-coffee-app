import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("ck-catalog")
export class CkCatalog extends LitElement {


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

      :host {
        display: block;
        height: calc(100vh - 83.200px);
      }

      .catalog {
        display: flex;
        width: 100%;
        height: 100%;
        padding: 0 2rem;
      }

      ck-catalog-content {
        flex-grow: 1;
        overflow-y: scroll;
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
    return html`
        <section class="catalog">
            <ck-side-menu></ck-side-menu>
            <ck-catalog-content></ck-catalog-content>
        </section>
    `;
  }
}