import './font-icons.js';
import './color.js';
import '../vaadin-context-menu/src/vaadin-context-menu.js';
import './vaadin-item.js';
import './vaadin-list-box.js';
import './mixins/menu-overlay.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="material-context-menu-overlay" theme-for="vaadin-context-menu-overlay">
  <template>
    <style include="material-menu-overlay">
      [part="content"] {
        /* FIXME(jouni): move the default background color to the overlay part in the context-menu core styles */
        background-color: transparent;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
