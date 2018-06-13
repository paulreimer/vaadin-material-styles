import './font-icons.js';
import './vaadin-text-field.js';
import '../vaadin-text-field/src/vaadin-password-field.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="material-password-field" theme-for="vaadin-password-field">
  <template>
    <style>
      [part="reveal-button"] {
        width: 24px;
        height: 24px;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
      }

      [part="reveal-button"]::before {
        font-family: material-icons;
        content: var(--material-icons-eye);
      }

      :host([password-visible]) [part="reveal-button"]::before {
        content: var(--material-icons-eye-disabled);
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
