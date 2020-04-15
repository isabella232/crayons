import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'fw-tab',
  styleUrl: 'tab.scss',
  shadow: true,
})

export class Tab {
  /**
   * Name of the tab displayed on the UI.
   */
  @Prop() tabHeader: string;

  /**
   * Message that is displayed when a user navigates away from a tab.
   */
  @Prop() message: string;

  render() {
    return (
      <Host class="tab">
        <slot/>
      </Host>
    );
  }
}
