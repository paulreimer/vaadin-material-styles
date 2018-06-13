import '../vaadin-dialog/src/vaadin-dialog.js';
import './mixins/overlay.js';
import './shadow.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="material-dialog" theme-for="vaadin-dialog-overlay">
  <template>
    <style include="material-overlay">
      [part="overlay"] {
        box-shadow: var(--material-shadow-elevation-24dp);
        outline: none;
        max-width: 560px;
        min-width: 280px;
      }

      [part="content"] {
        padding: 24px;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
