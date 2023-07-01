import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ck-s-button")
export default class CkButton extends LitElement {

  @property({ reflect: true })
  type: string = "";

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
        font-family: 'Inter', sans-serif;
      }
    `,
    css`
      button {
        background: none;
        border: 2px solid white;
        cursor: pointer;
        display: inline-flex;
        padding: 1.5rem 3rem;
        align-items: center;
        gap: 1rem;
        color: var(--white, #FFFCF7);
        text-align: center;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%;
        border-radius: 6.25rem;
        background: var(--grad-2, linear-gradient(270deg, #E66A8F 0%, #7E76DB 100%));
        margin-top: 4rem;
      }
    `
  ];

  render() {

    return html`
        <button class=${this.type}>
            <slot name="prefix"></slot>
            <slot name="content"></slot>
            <slot name="suffix"></slot>
        </button>
    `;
  }
}