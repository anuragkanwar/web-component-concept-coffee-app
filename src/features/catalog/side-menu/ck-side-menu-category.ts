import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("ck-side-menu-category")
export default class CkSideMenuCategory extends LitElement {

  @property({ reflect: true, attribute: 'cat-id' })
    // @ts-ignore
  catId: string;

  @property({ reflect: true, attribute: 'cat-sub-id' })
    // @ts-ignore
  catSubId: string;

  @state()
  isOpen: boolean = false;

  toggleCategory() {
    this.isOpen = !this.isOpen;
  }


  connectedCallback() {
    super.connectedCallback();
    this.isOpen = "0" === this.catId;
  }

  handleSubCatClick(ev: Event) {
    ev.stopPropagation();
    const content2 = document.querySelector("ck-catalog");
    if (!content2) return;
    if (!content2.shadowRoot) return;
    const content = content2.shadowRoot.querySelector("ck-catalog-content");
    if (!content) return;
    const holist = content2.shadowRoot.querySelector("ck-side-menu");
    if (!holist) return;

    content.setAttribute("cat-id", this.catId);
    // @ts-ignore
    content.setAttribute("sub-cat-id", ev.target.getAttribute("cat-sub-id"));

    // @ts-ignore
    const catList = holist.shadowRoot.querySelectorAll("ck-side-menu-category");
    catList.forEach((cat: Element) => {
      // @ts-ignore
      const subCatlist = cat.shadowRoot.querySelectorAll(".category-sub-cat li");
      subCatlist.forEach(li => {
        li.classList.remove("active");
      });
    });

    // @ts-ignore
    ev.target.classList.add("active");
  }

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
      .category-sub-cat {
        padding-left: 1rem;
        font-size: 1.3rem;
      }

      .category-sub-cat li.active {
        color: var(--my-selected-orange);
      }

      .name-content {
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }

      .category-name div span:hover {
        cursor: pointer;
      }

      .category-sub-cat li:hover {
        cursor: pointer;
      }


      .sub-text {
        pointer-events: none;
      }

      .hidden {
        display: none;
      }

      .toggle-icon, ion-icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
    `
  ];


  render() {
    const data = window.app.store.menus[0].children[this.catId];
    return html`
        <li class="category-name">
            <div class="name-content">
                <span @click=${this.toggleCategory}>${data.name}</span>
                <span class="toggle-icon">
                ${this.isOpen ? html`
                    <ion-icon name="chevron-down-outline"></ion-icon>` : html`
                    <ion-icon name='chevron-forward-outline'></ion-icon>`}
            </span>
            </div>
            <ul class="category-sub-cat ${this.isOpen ? '' : 'hidden'}">
                ${data.children.map((subcat: any, index: number) => {
                    return html`
                        <li class=${this.catId === '0' && index === 0 ? 'active' : ''}
                            @click=${this.handleSubCatClick} cat-id=${this.catId} cat-sub-id=${index}><span
                                class="sub-text">${subcat.name}</span>
                        </li>
                    `;
                })}
            </ul>
        </li>
    `;
  }
}