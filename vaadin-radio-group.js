import '../vaadin-radio-button/src/vaadin-radio-group.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="material-radio-group" theme-for="vaadin-radio-group">
  <template>
    <style>
      :host([theme~="vertical"]) {
        display: flex;
        flex-direction: column;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
