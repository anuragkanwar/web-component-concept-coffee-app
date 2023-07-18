import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

@customElement("ck-side-menu")
export class CkSideMenu extends LitElement {

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
        font-family: 'Alegreya Sans', sans-serif;
      }
    `,
    css`
      :host {
        position: relative;
        flex-basis: 20%;
        flex-shrink: 0;
      }

      ul {
        padding-top: 2rem;
        font-size: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1em;
        flex-shrink: 1;
      }

      .side-menu {
        overflow-y: scroll;
        height: 100%;
        position: relative;
      }
      
    `,
    css`
      @media only screen and (max-width: 700px) {
       
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
        <aside class="side-menu">
            <ul>
                ${repeat(window.app.store.menus[0].children, (item: any) => item.id, (_: any, index: number) => {
                    return html`
                        <ck-side-menu-category cat-id=${index}></ck-side-menu-category>
                    `;
                })}
            </ul>
        </aside>
    `;
  }
}