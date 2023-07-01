import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { Router } from "../../router/Router.ts";


@customElement("ck-home-page")
export default class CkHomePage extends LitElement {

  handleMainClick(ev: Event) {
    ev.preventDefault();
    Router.go("/catalog", "/");
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
      .showcase {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        min-height: 100vh;
        //padding: 5rem;
        margin-top: 86px;
      }

      .showcase video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
      }

      .vod-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #1e1e1e;
        mix-blend-mode: overlay;
      }

      .wrapper {
        display: flex;
        justify-content: center;
        gap: 4rem;
        height: 100%;
      }

      .content {
        position: relative;
        z-index: 10;
        font-size: 3rem;
        padding: 2rem 3rem;
        flex-basis: 50%;
        text-align: center;
      }

      .content h1 {
        font-weight: 500;
        font-size: 5rem;
      }

      .content h2 {
        font-weight: 400;
        background: linear-gradient(to right,
        rgb(207, 166, 105),
        #E66A8F,
        rgb(207, 166, 105));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        white-space: nowrap;
        background-size: 200%;
        animation: background-pan 3s linear infinite;
      }

      .hero-img-container {
        position: relative;
        flex-basis: 50%;
      }

      .hero-img-container > * {
        position: absolute;
        top: 0;
        right: 0;
      }

      .svg-wrappper {
        right: 30%;
      }

      .img-container {
        width: 100%;
      }

      .img-container svg {
        position: absolute;
        right: 0;
        width: 100%;
        transform: scale(0.3);
      }

      .img-container > img {
        object-fit: cover;
      }

      @keyframes background-pan {
        from {
          background-position: 0% center;
        }
        to {
          background-position: -200% center;

        }
      }

    `
  ];


  render() {
    return html`
        <section class="showcase">
            <div class="wrapper">
                <div class="content">
                    <h2>WE BELIEVE</h2>
                    <h1>COFFEE</h1>
                    <h2>IS THE SIMPLEST</h2>
                    <h1>PLEASURE</h1>
                    <ck-s-button @click=${this.handleMainClick}>
                        <span slot="content">Choose Coffee</span>
                        <span slot="suffix">→</span>
                    </ck-s-button>
                </div>

                <div class="hero-img-container">
                    <div class="svg-wrappper">
                        <svg width="585" height="685" viewBox="0 0 585 685" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M518.901 109.139C568.931 170.687 545.899 253.877 550.103 333.046C555.865 441.58 627.427 569.477 547.242 642.946C464.486 718.771 328.063 678.379 227.341 628.774C144.165 587.809 113.718 496.514 77.1076 411.405C37.6717 319.728 -29.6657 223.378 14.446 133.851C60.438 40.5081 175.624 5.4274 279.652 0.331273C371.733 -4.17956 460.79 37.6491 518.901 109.139Z"
                                  fill="#CFA669"/>
                        </svg>
                    </div>
                    <div class="svg-wrappper">
                        <svg width="591" height="597" viewBox="0 0 591 597" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M508.482 28.8541C608.652 100.111 604.133 240.715 565.648 357.451C526.177 477.174 447.246 592.54 321.236 596.811C179.25 601.623 39.5653 514.215 4.94804 376.455C-25.6434 254.717 91.4828 164.958 194.795 93.6388C291.932 26.5825 412.301 -39.5661 508.482 28.8541Z"
                                  fill="#E66A8F" fill-opacity="0.4"/>
                        </svg>
                    </div>
                    <div class="img-container img-l">
                        <img src="/src/assets/images/couvee-left-hand3.png" alt="">
                    </div>
                    <div class="img-container img-r">
                        <img src="/src/assets/images/couvee-right-hand2.png" alt="">
                    </div>
                </div>
            </div>
        </section>
    `;
  }
}