/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, h, Host, State } from '@stencil/core';
import { FlipTileState } from '../flip-tile/flip-tile-state';
import { modal } from '../modal/modal';
import { toast } from '../toast/toast';

type Themes = 'brand-light' | 'brand-dark' | 'classic-light' | 'classic-dark';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  @State() theme: Themes = 'brand-dark';

  componentDidRender() {
    document.body.classList.add('theme-' + this.theme);
  }

  private changeTheme(theme: Themes) {
    this.theme = theme;
    document.body.className = 'theme-' + this.theme;
  }

  private showToasts() {
    toast.info({
      message: 'Info',
    });
    toast.error({
      message: 'Error',
    });
    toast.success({
      message: 'Success',
    });
    toast.warning({
      message: 'Warning',
    });
    toast.info({
      icon: 'bulb',
      message: 'Custom icon',
    });
  }

  private showModal(showIcon = false) {
    const content = document.createElement('cw-modal-example');
    const modal$ = modal({
      content,
      title: 'title',
      icon: showIcon === true ? 'warning' : '',
      iconColor: 'color-warning',
    });
    modal$.then((m) => {
      document.addEventListener('close', () => m.close('close'));
    });
  }

  private showModalWithIcon() {
    this.showModal(true);
  }

  render() {
    return (
      <Host>
        <cw-basic-navigation>
          <cw-menu>
            <cw-menu-item
              active={this.theme === 'brand-light'}
              onClick={() => this.changeTheme('brand-light')}
            >
              Brand 2022 Light
            </cw-menu-item>
            <cw-menu-item
              active={this.theme === 'brand-dark'}
              onClick={() => this.changeTheme('brand-dark')}
            >
              Brand 2022 Dark
            </cw-menu-item>
            <cw-menu-item
              active={this.theme === 'classic-light'}
              onClick={() => this.changeTheme('classic-light')}
            >
              Classic Light
            </cw-menu-item>
            <cw-menu-item
              active={this.theme === 'classic-dark'}
              onClick={() => this.changeTheme('classic-dark')}
            >
              Classic Dark
            </cw-menu-item>
          </cw-menu>

          <main>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
                width: '100%',
              }}
            >
              <cw-date-picker></cw-date-picker>
            </div>
            <cw-button
              style={{ marginInlineStart: '1rem' }}
              onClick={this.showToasts.bind(this)}
            >
              Show toasts
            </cw-button>
            <cw-button
              style={{ marginInlineStart: '1rem' }}
              onClick={this.showModal.bind(this)}
            >
              Show modal
            </cw-button>
            <cw-button
              style={{ marginInlineStart: '1rem' }}
              onClick={this.showModalWithIcon.bind(this)}
            >
              Show modal w/ icon
            </cw-button>

            <cw-modal-container></cw-modal-container>

            <div
              style={{
                display: 'flex',
                marginTop: '2rem',
              }}
            >
              <cw-toggle></cw-toggle>
              <cw-toggle checked></cw-toggle>
              <cw-toggle disabled></cw-toggle>
              <cw-toggle indeterminate></cw-toggle>
              <cw-toggle textOff="Lorem ipsum" textOn="dolor sit"></cw-toggle>
              <cw-toggle hideText></cw-toggle>
            </div>

            <div
              style={{
                display: 'flex',
                marginTop: '2rem',
              }}
            >
              <cw-group
                header="Header text"
                sub-header="Subheader text"
                index={0}
                suppressHeaderSelection
              >
                <cw-group-item text="Example text 1"></cw-group-item>
                <cw-group-item
                  text="Example text 2"
                  secondaryText="26 sub items"
                ></cw-group-item>
                <div slot="footer">
                  <cw-button>
                    <cw-icon name="plus"></cw-icon>Add item
                  </cw-button>
                </div>
              </cw-group>

              <cw-group
                header="Header text"
                sub-header="Subheader text"
                index={0}
              >
                <cw-group-item text="Example text 1"></cw-group-item>
                <cw-group-item
                  text="Example text 2"
                  secondaryText="26 sub items"
                ></cw-group-item>
                <div slot="footer">
                  <cw-button>
                    <cw-icon name="plus"></cw-icon>Add item
                  </cw-button>
                </div>
              </cw-group>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
                width: '100%',
              }}
            >
              <cw-tabs layout={'stretched'}>
                <cw-tab-item>stretched tab 1</cw-tab-item>
                <cw-tab-item>stretched tab 2</cw-tab-item>
              </cw-tabs>

              <cw-tabs
                style={{
                  marginTop: '2rem',
                }}
              >
                <cw-tab-item>tab 1</cw-tab-item>
                <cw-tab-item>tab 2</cw-tab-item>
                <cw-tab-item>tab 3</cw-tab-item>
                <cw-tab-item>tab 4</cw-tab-item>
                <cw-tab-item>tab 5</cw-tab-item>
                <cw-tab-item>tab 6</cw-tab-item>
                <cw-tab-item>tab 7</cw-tab-item>
                <cw-tab-item>tab 8</cw-tab-item>
                <cw-tab-item>tab 9</cw-tab-item>
                <cw-tab-item>tab 10</cw-tab-item>
                <cw-tab-item>tab 11</cw-tab-item>
                <cw-tab-item>tab 12</cw-tab-item>
                <cw-tab-item>tab 13</cw-tab-item>
                <cw-tab-item>tab 14</cw-tab-item>
                <cw-tab-item>tab 15</cw-tab-item>
                <cw-tab-item>tab 16</cw-tab-item>
                <cw-tab-item>tab 17</cw-tab-item>
                <cw-tab-item>tab 18</cw-tab-item>
                <cw-tab-item>tab 19</cw-tab-item>
                <cw-tab-item>tab 20</cw-tab-item>
                <cw-tab-item>tab 21</cw-tab-item>
                <cw-tab-item>tab 22</cw-tab-item>
                <cw-tab-item>tab 23</cw-tab-item>
                <cw-tab-item>tab 24</cw-tab-item>
                <cw-tab-item>tab 25</cw-tab-item>
                <cw-tab-item>tab 26</cw-tab-item>
              </cw-tabs>

              <div
                style={{
                  marginTop: '2rem',
                  display: 'flex',
                }}
              >
                <cw-tabs>
                  <cw-tab-item icon>
                    <cw-icon name="maintenance" size="16"></cw-icon>
                  </cw-tab-item>
                  <cw-tab-item icon>
                    <cw-icon name="info" size="16"></cw-icon>
                  </cw-tab-item>
                  <cw-tab-item icon>
                    <cw-icon name="info" size="16"></cw-icon>
                  </cw-tab-item>
                </cw-tabs>

                <cw-tabs
                  small
                  style={{
                    marginLeft: '2rem',
                  }}
                >
                  <cw-tab-item icon>
                    <cw-icon name="maintenance" size="16"></cw-icon>
                  </cw-tab-item>
                  <cw-tab-item icon>
                    <cw-icon name="info" size="16"></cw-icon>
                  </cw-tab-item>
                  <cw-tab-item icon>
                    <cw-icon name="info" size="16"></cw-icon>
                  </cw-tab-item>
                </cw-tabs>

                <cw-tabs
                  small
                  style={{
                    marginLeft: '2rem',
                  }}
                >
                  <cw-tab-item>small tab 1</cw-tab-item>
                  <cw-tab-item>small tab 2</cw-tab-item>
                  <cw-tab-item>small tab 3</cw-tab-item>
                </cw-tabs>

                <cw-tabs
                  placement="top"
                  style={{
                    marginLeft: '2rem',
                  }}
                >
                  <cw-tab-item>inverted tab 1</cw-tab-item>
                  <cw-tab-item>inverted tab 2</cw-tab-item>
                  <cw-tab-item>inverted tab 3</cw-tab-item>
                </cw-tabs>

                <cw-tabs
                  selected={1}
                  style={{
                    marginLeft: '2rem',
                  }}
                >
                  <cw-tab-item disabled>disabled tab 1</cw-tab-item>
                  <cw-tab-item>tab 2</cw-tab-item>
                  <cw-tab-item disabled>disabled tab 3</cw-tab-item>
                </cw-tabs>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <cw-message-bar>Message text</cw-message-bar>
              <cw-message-bar type="warning">Message text</cw-message-bar>
              <cw-message-bar type="danger">
                <div class="d-flex align-items-center justify-content-between">
                  Message text <cw-button>Action</cw-button>
                </div>
              </cw-message-bar>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <cw-animated-tabs>
                <cw-animated-tab icon="maintenance" count={21}>
                  Tab one content
                </cw-animated-tab>
                <cw-animated-tab icon="info">Tab two content</cw-animated-tab>
                <cw-animated-tab class="disabled" icon="info">
                  Tab two content
                </cw-animated-tab>
              </cw-animated-tabs>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <cw-flip-tile>
                <div slot="header">Flip header</div>
                <div slot="footer">
                  <div>Predicted maintenance date</div>
                  <div class="d-flex align-items-center">
                    <cw-icon name="info" size="16"></cw-icon>2021-06-22
                  </div>
                </div>
              </cw-flip-tile>
              <cw-flip-tile state={FlipTileState.Primary}>
                <div slot="header">Flip header</div>
                <div slot="footer">
                  <div>Predicted maintenance date</div>
                  <div class="d-flex align-items-center">
                    <cw-icon name="info" size="16"></cw-icon>2021-06-22
                  </div>
                </div>
              </cw-flip-tile>
              <cw-flip-tile state={FlipTileState.Info}>
                <div slot="header">Flip header</div>
                <div slot="footer">
                  <div>Predicted maintenance date</div>
                  <div class="d-flex align-items-center">
                    <cw-icon name="info" size="16"></cw-icon>2021-06-22
                  </div>
                </div>
              </cw-flip-tile>
              <cw-flip-tile state={FlipTileState.Warning}>
                <div slot="header">Flip header</div>
                <div slot="footer">
                  <div>Predicted maintenance date</div>
                  <div class="d-flex align-items-center">
                    <cw-icon name="info" size="16"></cw-icon>2021-06-22
                  </div>
                </div>
              </cw-flip-tile>
              <cw-flip-tile state={FlipTileState.Alarm}>
                <div slot="header">Flip header</div>
                <div slot="footer">
                  <div>Predicted maintenance date</div>
                  <div class="d-flex align-items-center">
                    <cw-icon name="info" size="16"></cw-icon>2021-06-22
                  </div>
                </div>
              </cw-flip-tile>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <cw-tile size="small">92.8 °C</cw-tile>

              <cw-tile size="medium" class="mr-1">
                <div slot="header">Tile header</div>
                <div class="text-l">92.8 °C</div>
              </cw-tile>

              <cw-tile size="big">
                <div
                  class="d-flex flex-grow-1 align-items-center justify-content-between"
                  slot="header"
                >
                  Tile header
                  <cw-icon-button ghost icon="context-menu"></cw-icon-button>
                </div>
                <div slot="subheader">Temperature</div>
                <div
                  style={{
                    display: 'flex',
                    'flex-direction': 'column',
                    height: '100%',
                    'align-items': 'flex-end',
                    'justify-content': 'space-between',
                  }}
                >
                  <span>92.8 °C</span>
                </div>
                <div
                  class="d-flex h-100 align-items-center justify-content-end"
                  slot="footer"
                >
                  <cw-button ghost slot="footer">
                    <cw-icon name="chevron-right-small"></cw-icon>Details
                  </cw-button>
                </div>
              </cw-tile>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <cw-select selectedIndices="2">
                <cw-select-item label="Item 1" value="1"></cw-select-item>
                <cw-select-item label="Item 2" value="2"></cw-select-item>
                <cw-select-item label="Item 3" value="3"></cw-select-item>
                <cw-select-item label="Item 4" value="4"></cw-select-item>
              </cw-select>

              <cw-select mode="multiple" selectedIndices="2">
                <cw-select-item label="Item 1" value="1"></cw-select-item>
                <cw-select-item label="Item 2" value="2"></cw-select-item>
                <cw-select-item label="Item 3" value="3"></cw-select-item>
                <cw-select-item label="Item 4" value="4"></cw-select-item>
              </cw-select>

              <cw-select editable selectedIndices="2" allowClear>
                <cw-select-item label="Item 1" value="1"></cw-select-item>
                <cw-select-item label="Item 2" value="2"></cw-select-item>
                <cw-select-item label="Item 3" value="3"></cw-select-item>
                <cw-select-item label="Item 4" value="4"></cw-select-item>
              </cw-select>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <cw-filter-chip>Test</cw-filter-chip>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <cw-breadcrumb>
                <cw-breadcrumb-item
                  icon="home"
                  label="Root"
                ></cw-breadcrumb-item>
                <cw-breadcrumb-item label="Level 1"></cw-breadcrumb-item>
                <cw-breadcrumb-item label="Level 2"></cw-breadcrumb-item>
              </cw-breadcrumb>

              <cw-breadcrumb ghost>
                <cw-breadcrumb-item
                  icon="home"
                  label="Root"
                ></cw-breadcrumb-item>
                <cw-breadcrumb-item label="Level 1"></cw-breadcrumb-item>
                <cw-breadcrumb-item label="Level 2"></cw-breadcrumb-item>
              </cw-breadcrumb>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <cw-counter-pill>1</cw-counter-pill>
              <cw-counter-pill>12</cw-counter-pill>
              <cw-counter-pill>123</cw-counter-pill>
              <cw-counter-pill style={{ width: '8rem' }}>123</cw-counter-pill>

              <cw-counter-pill variant="success">1</cw-counter-pill>
              <cw-counter-pill outline>12</cw-counter-pill>
              <cw-counter-pill outline variant="alarm">
                123
              </cw-counter-pill>
              <cw-counter-pill alignLeft outline style={{ width: '8rem' }}>
                123
              </cw-counter-pill>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <cw-pill variant="custom" color="white" background="purple">
                Label
              </cw-pill>

              <cw-pill>Label</cw-pill>
              <cw-pill outline>Label</cw-pill>
              <cw-pill style={{ width: '8rem' }}>Label</cw-pill>

              <cw-pill icon="star">Label</cw-pill>
              <cw-pill icon="star" style={{ width: '8rem' }}>
                Label
              </cw-pill>
              <cw-pill outline alignLeft icon="star" style={{ width: '8rem' }}>
                Label
              </cw-pill>

              <cw-pill variant="alarm">Label</cw-pill>
              <cw-pill variant="alarm" outline>
                Label
              </cw-pill>
              <cw-pill variant="alarm" style={{ width: '8rem' }}>
                Label
              </cw-pill>

              <cw-pill variant="alarm" icon="star">
                Label
              </cw-pill>
              <cw-pill variant="alarm" icon="star" style={{ width: '8rem' }}>
                Label
              </cw-pill>
              <cw-pill
                variant="alarm"
                outline
                alignLeft
                icon="star"
                style={{ width: '8rem' }}
              >
                Label
              </cw-pill>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
                flexWrap: 'wrap',
              }}
            >
              <cw-chip closable outline>
                Primary
              </cw-chip>
              <cw-chip icon="print">Primary with icon</cw-chip>
              <cw-chip
                icon="print"
                style={{ width: '10rem' }}
                closable
                onClose={console.log}
                onClick={console.log}
              >
                Primary
              </cw-chip>

              <cw-chip variant="critical" closable outline>
                Alarm
              </cw-chip>
              <cw-chip variant="alarm" icon="print">
                Alarm with icon
              </cw-chip>
              <cw-chip
                variant="alarm"
                icon="print"
                style={{ width: '10rem' }}
                closable
                onClose={console.log}
                onClick={console.log}
              >
                Alarm
              </cw-chip>
              <cw-chip
                variant="warning"
                icon="print"
                style={{ width: '10rem' }}
                closable
                onClose={console.log}
                onClick={console.log}
              >
                Warning
              </cw-chip>
              <cw-chip
                variant="info"
                icon="print"
                style={{ width: '10rem' }}
                closable
                onClose={console.log}
                onClick={console.log}
              >
                Info
              </cw-chip>
              <cw-chip
                variant="neutral"
                icon="print"
                style={{ width: '10rem' }}
                closable
                onClose={console.log}
                onClick={console.log}
              >
                Neutral
              </cw-chip>
              <cw-chip
                variant="critical"
                icon="print"
                style={{ width: '10rem' }}
                closable
                onClose={console.log}
                onClick={console.log}
              >
                Critical
              </cw-chip>
              <cw-chip
                variant="success"
                icon="print"
                style={{ width: '10rem' }}
                closable
                onClose={console.log}
                onClick={console.log}
              >
                Success
              </cw-chip>
              <cw-chip
                background="purple"
                color="green"
                variant="custom"
                icon="print"
                style={{ width: '10rem' }}
                closable
                onClose={console.log}
                onClick={console.log}
              >
                Custom
              </cw-chip>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <div class="btn-group">
                <cw-button variant="Primary" outline>
                  Left
                </cw-button>
                <cw-button variant="Primary">Middle</cw-button>
                <cw-button variant="Primary" outline>
                  Right
                </cw-button>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <cw-blind label="Blind">Blind content</cw-blind>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <div
                style={{
                  marginRight: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  marginTop: '2rem',
                }}
              >
                <cw-button>Button</cw-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <cw-button disabled>Button</cw-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <cw-button outline>Button</cw-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <cw-button disabled outline>
                  Button
                </cw-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <cw-button ghost>Button</cw-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <cw-button disabled ghost>
                  Button
                </cw-button>
                <div style={{ marginRight: '0.25rem' }}></div>
              </div>

              <div
                style={{
                  marginRight: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  marginTop: '2rem',
                }}
              >
                <cw-button variant="Secondary">Button</cw-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <cw-button variant="Secondary" disabled>
                  Button
                </cw-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <cw-button variant="Secondary" outline>
                  Button
                </cw-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <cw-button variant="Secondary" disabled outline>
                  Button
                </cw-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <cw-button variant="Secondary" ghost>
                  Button
                </cw-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <cw-button variant="Secondary" disabled ghost>
                  Button
                </cw-button>
                <div style={{ marginRight: '0.25rem' }}></div>
              </div>

              <div
                style={{
                  marginRight: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  marginTop: '2rem',
                }}
              >
                <cw-button variant="Secondary" ghost selected>
                  Button
                </cw-button>
              </div>

              <div
                style={{
                  marginRight: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  marginTop: '2rem',
                }}
              >
                <cw-icon-button icon="print" oval></cw-icon-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <cw-icon-button
                  icon="print"
                  oval
                  variant="Primary"
                ></cw-icon-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <cw-icon-button
                  icon="print"
                  oval
                  variant="Primary"
                  outline
                ></cw-icon-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <cw-icon-button
                  icon="print"
                  oval
                  variant="Primary"
                  ghost
                ></cw-icon-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <cw-icon-button icon="print" oval size="24"></cw-icon-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <cw-icon-button icon="print" oval size="16"></cw-icon-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <cw-icon-button icon="print" oval size="12"></cw-icon-button>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <div
                style={{
                  marginRight: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  marginTop: '2rem',
                }}
              >
                <cw-split-button label="Test">
                  <cw-split-button-item label="Item 1" icon="print" />
                  <cw-split-button-item label="Item 2" icon="print" />
                  <cw-split-button-item label="Item 3" icon="print" />
                </cw-split-button>
              </div>
              <div
                style={{
                  marginRight: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  marginTop: '2rem',
                }}
              >
                <input type="checkbox" id="xxx" checked />
                <label htmlFor="xxx">Checked</label>
              </div>
              <div
                style={{
                  marginRight: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  marginTop: '2rem',
                }}
              >
                <input type="checkbox" id="xxxz" checked disabled />
                <label htmlFor="xxxz">Checked disabled</label>
              </div>
              <div
                style={{
                  marginRight: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  marginTop: '2rem',
                }}
              >
                <input type="checkbox" id="xxx2" />
                <label htmlFor="xxx2">Unchecked</label>
              </div>
              <div
                style={{
                  marginRight: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  marginTop: '2rem',
                }}
              >
                <input type="checkbox" id="xxx2c" disabled />
                <label htmlFor="xxx2c">Unchecked disabeld</label>
              </div>
              <div
                style={{
                  marginRight: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  marginTop: '2rem',
                }}
              >
                <input
                  type="checkbox"
                  id="xxx3"
                  ref={(elm) => (elm.indeterminate = true)}
                />
                <label htmlFor="xxx3">Indeterminate</label>
              </div>
              <div
                style={{
                  marginRight: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  marginTop: '2rem',
                }}
              >
                <input
                  type="checkbox"
                  id="xxx4"
                  ref={(elm) => (elm.indeterminate = true)}
                  disabled
                />
                <label htmlFor="xxx4">Indeterminate Disabled</label>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <input
                defaultChecked
                id="checkbox_1_1"
                name="group_1"
                type="radio"
              />
              <label htmlFor="checkbox_1_1"> Checked </label>
              <input id="checkbox_1_2" name="group_1" type="radio" />
              <label htmlFor="checkbox_1_2"> Normal </label>
              <input id="checkbox_1_3" name="group_1" type="radio" disabled />
              <label htmlFor="checkbox_1_3"> Disabled </label>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <cw-button id="triggerId">Dropdown</cw-button>
              <cw-dropdown
                trigger="triggerId"
                placement="bottom-start"
                header="Header"
              >
                <div class="dropdown-buttons">
                  <cw-icon-button invisible icon="cut"></cw-icon-button>
                  <cw-icon-button invisible icon="copy"></cw-icon-button>
                  <cw-icon-button invisible icon="paste"></cw-icon-button>
                  <cw-icon-button invisible icon="trashcan"></cw-icon-button>
                </div>
                <div class="dropdown-divider"></div>
                <cw-dropdown-item label="Item 1"></cw-dropdown-item>
                <cw-dropdown-item label="Item 2"></cw-dropdown-item>
                <cw-dropdown-item disabled label="Item 3"></cw-dropdown-item>
              </cw-dropdown>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <div
                style={{
                  width: '20%',
                }}
              >
                <input
                  class="form-control"
                  placeholder="Enter text"
                  type="text"
                />
                <input
                  class="form-control"
                  placeholder="Enter a number"
                  type="number"
                  style={{ marginBottom: '2rem' }}
                />
                <cw-input-group style={{ marginBottom: '1rem' }}>
                  <span slot="input-start">Name</span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                </cw-input-group>

                <cw-input-group style={{ marginBottom: '2rem' }}>
                  <span slot="input-start">Price</span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                  <span slot="input-end">.00</span>
                  <span slot="input-end">$</span>
                </cw-input-group>

                <input
                  style={{ marginBottom: '2rem' }}
                  readOnly
                  value={'Some readonly text'}
                  class="form-control"
                  type="text"
                />
                <input
                  style={{ marginBottom: '2rem' }}
                  disabled
                  readOnly
                  value={'Some readonly text'}
                  class="form-control"
                  type="text"
                />

                <form class="needs-validation" novalidate>
                  <label htmlFor="validationServer03" class="form-label">
                    City
                  </label>
                  <input
                    value="Foo"
                    type="text"
                    class="form-control is-invalid"
                    id="validationServer03"
                    aria-describedby="validationServer03Feedback"
                    required
                  />
                  <div id="validationServer03Feedback" class="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </form>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <cw-expanding-search placeholder="Test..." />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                position: 'relative',
                marginTop: '2rem',
                height: '20rem',
              }}
            >
              <textarea
                class="form-control"
                style={{ width: '20rem' }}
              ></textarea>
            </div>
          </main>
        </cw-basic-navigation>
      </Host>
    );
  }
}
