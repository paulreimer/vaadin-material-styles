import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '../color.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class MyDarkUI extends PolymerElement {
  static get template() {
    return html`
    <style include="material-color-dark">
    :host {
      display: block;
      padding: 1em;
      color: var(--material-primary-text-color);
    }
    </style>
    Hello, dark world!
`;
  }

  static get is() {
    return 'my-dark-ui';
  }
}
customElements.define(MyDarkUI.is, MyDarkUI);
