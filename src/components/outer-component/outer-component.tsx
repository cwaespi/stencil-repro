import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'outer-component',
  styleUrl: 'outer-component.css',
  shadow: true
})
export class OuterComponent {
  @State() show: boolean;

  render() {
    return <div>
      <h2>OUTER</h2>
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
