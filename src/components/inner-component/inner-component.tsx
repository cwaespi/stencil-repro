import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'inner-component',
  styleUrl: 'inner-component.css',
  shadow: true
})
export class InnerComponent {
  @State() show: boolean;

  render() {
    return <div>
      <h2>INNER</h2>
      <button onClick={() => this.show = !this.show}>toggle {this.show ? 'true' : 'false'}</button>
      {this.renderSlot()}
    </div>;
  }

  renderSlot() {
    if (this.show) {
      return <slot></slot>
    }

    return null;
  }
}
