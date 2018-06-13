import '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/social-icons.js';
import '../vaadin-item.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class PersonItemElement extends Vaadin.ItemElement {
  static get template() {
    return html`
    <style include="material-item">
      :host {
        display: flex;
        align-items: center;
      }

      .photo {
        flex: none;
        border-radius: 50%;
        background-color: var(--material-divider-color);
        color: var(--material-disabled-text-color);
        margin-right: 16px;
        padding: 4px;
      }

      .email {
        color: var(--material-secondary-text-color);
        font-size: var(--material-small-font-size);
        display: var(--person-item-email-display, none);
      }

      /* Items in a list will have tabindex, but a selected item inside a vaadin-dropdown-menu-text-field doesn't */

      :host([tabindex]) {
        padding: 4px 10px;
      }

      :host(:not([tabindex])) .email,
      :host(:not([tabindex])) .photo {
        display: none;
      }

      :host([tabindex]:hover:not([disabled])),
      :host([tabindex][focused]:not([disabled])) {
        background-color: var(--material-secondary-background-color);
      }

      @media (pointer: coarse) {
        :host([tabindex]:hover:not([disabled]))
        :host([tabindex][focused]:not([disabled])) {
          background-color: transparent;
        }
      }
    </style>
    <iron-icon icon="social:person" class="photo"></iron-icon>
    <div class="details">
      <div class="name"><slot></slot></div>
      <div class="email">[[_computeEmail(email)]]</div>
    </div>
`;
  }

  static get is() {
    return 'person-item';
  }

  static get properties() {
    return {
      email: {
        type: String,
        value: ''
      }
    };
  }

  _computeEmail(email) {
    return this.email || this.textContent.toLowerCase().replace(' ', '.') + '@example.org';
  }
}

customElements.define(PersonItemElement.is, PersonItemElement);
