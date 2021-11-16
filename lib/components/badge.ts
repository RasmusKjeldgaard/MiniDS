import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('my-element')
class BadgeElement extends LitElement {
  render() {
    return html`
      <div>Hello from Badge</div>
    `;
  }
}