/**
 * Copyright 2025 Alyssa F
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-sidebar`
 * 
 * Acts as a visual sidebar wrapper.
 * Handles sizing, background, and link placement.
 * 
 * @demo index.html
 * @element portfolio-sidebar
 */
export class PortfolioSidebar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-sidebar";
  }

  constructor() {
    super();
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
      }

      .wrapper {
        width: 300px;
        height: 100vh;
        position: sticky;
        top: 0;
        overflow-x: hidden;
        background: linear-gradient(
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.7)
        ),
        url(https://www.crowe.com/-/media/crowe/llp/sc10-media/insights/articles/2023/content-2000x1125/contentmktmt2300002bfy23-markets-technology-awareness--whats-next-for-tech--thought-leadershipas3639.jpg?rev=025a044aa9394515a261e9c6242045cb);
        background-size: cover;
        background-position: center;
        background-color: black;
        display: flex;
        text-align: center;
        border-right: 10px solid white;
      }

      .links {
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    `];
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="links">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(PortfolioSidebar.tag, PortfolioSidebar);
