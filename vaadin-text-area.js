import './vaadin-text-field.js';
import '../vaadin-text-field/src/vaadin-text-area.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="material-text-area" theme-for="vaadin-text-area">
  <template>
    <style include="material-text-field">
      [part="input-field"] {
        height: auto;
        box-sizing: border-box;
      }

      /* NOTE(platosha): double attribute workarounds specifity for Firefox */
      [part="value"][part="value"] {
        padding-top: 0;
        margin-top: 4px;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
