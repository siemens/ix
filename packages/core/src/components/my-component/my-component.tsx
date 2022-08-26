/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, h, Host, State } from '@stencil/core';
import { FlipTileState } from '../flip-tile/flip-tile-state';
import { modal } from '../modal/modal-utils';
import { toast } from '../toast/toast-utils';
import { UploadFileState } from '../upload/upload-file-state';

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
    const content = document.createElement('ix-modal-example');
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
        <ix-basic-navigation>
          <ix-menu>
            <ix-menu-item
              active={this.theme === 'brand-light'}
              onClick={() => this.changeTheme('brand-light')}
            >
              Brand 2022 Light
            </ix-menu-item>
            <ix-menu-item
              active={this.theme === 'brand-dark'}
              onClick={() => this.changeTheme('brand-dark')}
            >
              Brand 2022 Dark
            </ix-menu-item>
            <ix-menu-item
              active={this.theme === 'classic-light'}
              onClick={() => this.changeTheme('classic-light')}
            >
              Classic Light
            </ix-menu-item>
            <ix-menu-item
              active={this.theme === 'classic-dark'}
              onClick={() => this.changeTheme('classic-dark')}
            >
              Classic Dark
            </ix-menu-item>
          </ix-menu>

          <main>
            <ix-button
              style={{ marginInlineStart: '1rem' }}
              onClick={this.showToasts.bind(this)}
            >
              Show toasts
            </ix-button>
            <ix-button
              style={{ marginInlineStart: '1rem' }}
              onClick={this.showModal.bind(this)}
            >
              Show modal
            </ix-button>
            <ix-button
              style={{ marginInlineStart: '1rem' }}
              onClick={this.showModalWithIcon.bind(this)}
            >
              Show modal w/ icon
            </ix-button>

            <ix-modal-container></ix-modal-container>

            <div
              style={{
                display: 'flex',
                marginTop: '2rem',
              }}
            >
              <ix-kpi label='Motor speed' value='Nominal'></ix-kpi>
              <ix-kpi label='Motor speed' value={122.6} unit='rpm'></ix-kpi>
              <ix-kpi label='Motor speed' value={122.6} state="alarm"></ix-kpi>
              <ix-kpi label='Motor speed' value={122.6} state='warning'></ix-kpi>

              <ix-kpi label='Motor speed' value='Nominal' orientation='vertical'></ix-kpi>
              <ix-kpi label='Motor speed' value={122.6} unit='rpm' state='alarm' orientation='vertical'></ix-kpi>
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
              <ix-date-picker></ix-date-picker>
            </div>

            <div
              style={{
                display: 'flex',
                marginTop: '2rem',
              }}
            >
              <ix-upload></ix-upload>
              <ix-upload state={UploadFileState.LOADING}></ix-upload>
              <ix-upload state={UploadFileState.UPLOAD_SUCCESSED}></ix-upload>
              <ix-upload state={UploadFileState.UPLOAD_FAILED}></ix-upload>
              <ix-upload disabled></ix-upload>
              <ix-upload
                multiline
                selectFileText="Lorem ipsum dolor sit amet"
              ></ix-upload>
            </div>

            <div
              style={{
                display: 'flex',
                marginTop: '2rem',
              }}
            >
              <ix-toggle></ix-toggle>
              <ix-toggle checked></ix-toggle>
              <ix-toggle disabled></ix-toggle>
              <ix-toggle indeterminate></ix-toggle>
              <ix-toggle textOff="Lorem ipsum" textOn="dolor sit"></ix-toggle>
              <ix-toggle hideText></ix-toggle>
            </div>

            <div
              style={{
                display: 'flex',
                marginTop: '2rem',
              }}
            >
              <ix-group
                header="Header text"
                sub-header="Subheader text"
                index={0}
                suppressHeaderSelection
              >
                <ix-group-item text="Example text 1"></ix-group-item>
                <ix-group-item
                  text="Example text 2"
                  secondaryText="26 sub items"
                ></ix-group-item>
                <div slot="footer">
                  <ix-button>
                    <ix-icon name="plus"></ix-icon>Add item
                  </ix-button>
                </div>
              </ix-group>

              <ix-group
                header="Header text"
                sub-header="Subheader text"
                index={0}
              >
                <ix-group-item text="Example text 1"></ix-group-item>
                <ix-group-item
                  text="Example text 2"
                  secondaryText="26 sub items"
                ></ix-group-item>
                <div slot="footer">
                  <ix-button>
                    <ix-icon name="plus"></ix-icon>Add item
                  </ix-button>
                </div>
              </ix-group>
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
              <ix-tabs layout={'stretched'}>
                <ix-tab-item>stretched tab 1</ix-tab-item>
                <ix-tab-item>stretched tab 2</ix-tab-item>
              </ix-tabs>

              <ix-tabs
                style={{
                  marginTop: '2rem',
                }}
              >
                <ix-tab-item>tab 1</ix-tab-item>
                <ix-tab-item>tab 2</ix-tab-item>
                <ix-tab-item>tab 3</ix-tab-item>
                <ix-tab-item>tab 4</ix-tab-item>
                <ix-tab-item>tab 5</ix-tab-item>
                <ix-tab-item>tab 6</ix-tab-item>
                <ix-tab-item>tab 7</ix-tab-item>
                <ix-tab-item>tab 8</ix-tab-item>
                <ix-tab-item>tab 9</ix-tab-item>
                <ix-tab-item>tab 10</ix-tab-item>
                <ix-tab-item>tab 11</ix-tab-item>
                <ix-tab-item>tab 12</ix-tab-item>
                <ix-tab-item>tab 13</ix-tab-item>
                <ix-tab-item>tab 14</ix-tab-item>
                <ix-tab-item>tab 15</ix-tab-item>
                <ix-tab-item>tab 16</ix-tab-item>
                <ix-tab-item>tab 17</ix-tab-item>
                <ix-tab-item>tab 18</ix-tab-item>
                <ix-tab-item>tab 19</ix-tab-item>
                <ix-tab-item>tab 20</ix-tab-item>
                <ix-tab-item>tab 21</ix-tab-item>
                <ix-tab-item>tab 22</ix-tab-item>
                <ix-tab-item>tab 23</ix-tab-item>
                <ix-tab-item>tab 24</ix-tab-item>
                <ix-tab-item>tab 25</ix-tab-item>
                <ix-tab-item>tab 26</ix-tab-item>
              </ix-tabs>

              <div
                style={{
                  marginTop: '2rem',
                  display: 'flex',
                }}
              >
                <ix-tabs>
                  <ix-tab-item icon>
                    <ix-icon name="maintenance" size="16"></ix-icon>
                  </ix-tab-item>
                  <ix-tab-item icon>
                    <ix-icon name="info" size="16"></ix-icon>
                  </ix-tab-item>
                  <ix-tab-item icon>
                    <ix-icon name="info" size="16"></ix-icon>
                  </ix-tab-item>
                </ix-tabs>

                <ix-tabs
                  small
                  style={{
                    marginLeft: '2rem',
                  }}
                >
                  <ix-tab-item icon>
                    <ix-icon name="maintenance" size="16"></ix-icon>
                  </ix-tab-item>
                  <ix-tab-item icon>
                    <ix-icon name="info" size="16"></ix-icon>
                  </ix-tab-item>
                  <ix-tab-item icon>
                    <ix-icon name="info" size="16"></ix-icon>
                  </ix-tab-item>
                </ix-tabs>

                <ix-tabs
                  small
                  style={{
                    marginLeft: '2rem',
                  }}
                >
                  <ix-tab-item>small tab 1</ix-tab-item>
                  <ix-tab-item>small tab 2</ix-tab-item>
                  <ix-tab-item>small tab 3</ix-tab-item>
                </ix-tabs>

                <ix-tabs
                  placement="top"
                  style={{
                    marginLeft: '2rem',
                  }}
                >
                  <ix-tab-item>inverted tab 1</ix-tab-item>
                  <ix-tab-item>inverted tab 2</ix-tab-item>
                  <ix-tab-item>inverted tab 3</ix-tab-item>
                </ix-tabs>

                <ix-tabs
                  selected={1}
                  style={{
                    marginLeft: '2rem',
                  }}
                >
                  <ix-tab-item disabled>disabled tab 1</ix-tab-item>
                  <ix-tab-item>tab 2</ix-tab-item>
                  <ix-tab-item disabled>disabled tab 3</ix-tab-item>
                </ix-tabs>
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
              <ix-message-bar>Message text</ix-message-bar>
              <ix-message-bar type="warning">Message text</ix-message-bar>
              <ix-message-bar type="danger">
                <div class="d-flex align-items-center justify-content-between">
                  Message text <ix-button>Action</ix-button>
                </div>
              </ix-message-bar>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <ix-animated-tabs>
                <ix-animated-tab icon="maintenance" count={21}>
                  Tab one content
                </ix-animated-tab>
                <ix-animated-tab icon="info">Tab two content</ix-animated-tab>
                <ix-animated-tab class="disabled" icon="info">
                  Tab two content
                </ix-animated-tab>
              </ix-animated-tabs>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <ix-flip-tile>
                <div slot="header">Flip header</div>
                <div slot="footer">
                  <div>Predicted maintenance date</div>
                  <div class="d-flex align-items-center">
                    <ix-icon name="info" size="16"></ix-icon>2021-06-22
                  </div>
                </div>
              </ix-flip-tile>
              <ix-flip-tile state={FlipTileState.Primary}>
                <div slot="header">Flip header</div>
                <div slot="footer">
                  <div>Predicted maintenance date</div>
                  <div class="d-flex align-items-center">
                    <ix-icon name="info" size="16"></ix-icon>2021-06-22
                  </div>
                </div>
              </ix-flip-tile>
              <ix-flip-tile state={FlipTileState.Info}>
                <div slot="header">Flip header</div>
                <div slot="footer">
                  <div>Predicted maintenance date</div>
                  <div class="d-flex align-items-center">
                    <ix-icon name="info" size="16"></ix-icon>2021-06-22
                  </div>
                </div>
              </ix-flip-tile>
              <ix-flip-tile state={FlipTileState.Warning}>
                <div slot="header">Flip header</div>
                <div slot="footer">
                  <div>Predicted maintenance date</div>
                  <div class="d-flex align-items-center">
                    <ix-icon name="info" size="16"></ix-icon>2021-06-22
                  </div>
                </div>
              </ix-flip-tile>
              <ix-flip-tile state={FlipTileState.Alarm}>
                <div slot="header">Flip header</div>
                <div slot="footer">
                  <div>Predicted maintenance date</div>
                  <div class="d-flex align-items-center">
                    <ix-icon name="info" size="16"></ix-icon>2021-06-22
                  </div>
                </div>
              </ix-flip-tile>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <ix-tile size="small">92.8 °C</ix-tile>

              <ix-tile size="medium" class="mr-1">
                <div slot="header">Tile header</div>
                <div class="text-l">92.8 °C</div>
              </ix-tile>

              <ix-tile size="big">
                <div
                  class="d-flex flex-grow-1 align-items-center justify-content-between"
                  slot="header"
                >
                  Tile header
                  <ix-icon-button ghost icon="context-menu"></ix-icon-button>
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
                  <ix-button ghost slot="footer">
                    <ix-icon name="chevron-right-small"></ix-icon>Details
                  </ix-button>
                </div>
              </ix-tile>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <ix-select selectedIndices="2">
                <ix-select-item label="Item 1" value="1"></ix-select-item>
                <ix-select-item label="Item 2" value="2"></ix-select-item>
                <ix-select-item label="Item 3" value="3"></ix-select-item>
                <ix-select-item label="Item 4" value="4"></ix-select-item>
              </ix-select>

              <ix-select mode="multiple" selectedIndices="2">
                <ix-select-item label="Item 1" value="1"></ix-select-item>
                <ix-select-item label="Item 2" value="2"></ix-select-item>
                <ix-select-item label="Item 3" value="3"></ix-select-item>
                <ix-select-item label="Item 4" value="4"></ix-select-item>
              </ix-select>

              <ix-select editable selectedIndices="2" allowClear>
                <ix-select-item label="Item 1" value="1"></ix-select-item>
                <ix-select-item label="Item 2" value="2"></ix-select-item>
                <ix-select-item label="Item 3" value="3"></ix-select-item>
                <ix-select-item label="Item 4" value="4"></ix-select-item>
              </ix-select>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <ix-filter-chip>Test</ix-filter-chip>
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
              <ix-breadcrumb>
                <ix-breadcrumb-item
                  icon="home"
                  label="Root"
                ></ix-breadcrumb-item>
                <ix-breadcrumb-item label="Level 1"></ix-breadcrumb-item>
                <ix-breadcrumb-item label="Level 2"></ix-breadcrumb-item>
              </ix-breadcrumb>

              <ix-breadcrumb ghost>
                <ix-breadcrumb-item
                  icon="home"
                  label="Root"
                ></ix-breadcrumb-item>
                <ix-breadcrumb-item label="Level 1"></ix-breadcrumb-item>
                <ix-breadcrumb-item label="Level 2"></ix-breadcrumb-item>
              </ix-breadcrumb>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <ix-counter-pill>1</ix-counter-pill>
              <ix-counter-pill>12</ix-counter-pill>
              <ix-counter-pill>123</ix-counter-pill>
              <ix-counter-pill style={{ width: '8rem' }}>123</ix-counter-pill>

              <ix-counter-pill variant="success">1</ix-counter-pill>
              <ix-counter-pill outline>12</ix-counter-pill>
              <ix-counter-pill outline variant="alarm">
                123
              </ix-counter-pill>
              <ix-counter-pill alignLeft outline style={{ width: '8rem' }}>
                123
              </ix-counter-pill>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '2rem',
              }}
            >
              <ix-pill variant="custom" color="white" background="purple">
                Label
              </ix-pill>

              <ix-pill>Label</ix-pill>
              <ix-pill outline>Label</ix-pill>
              <ix-pill style={{ width: '8rem' }}>Label</ix-pill>

              <ix-pill icon="star">Label</ix-pill>
              <ix-pill icon="star" style={{ width: '8rem' }}>
                Label
              </ix-pill>
              <ix-pill outline alignLeft icon="star" style={{ width: '8rem' }}>
                Label
              </ix-pill>

              <ix-pill variant="alarm">Label</ix-pill>
              <ix-pill variant="alarm" outline>
                Label
              </ix-pill>
              <ix-pill variant="alarm" style={{ width: '8rem' }}>
                Label
              </ix-pill>

              <ix-pill variant="alarm" icon="star">
                Label
              </ix-pill>
              <ix-pill variant="alarm" icon="star" style={{ width: '8rem' }}>
                Label
              </ix-pill>
              <ix-pill
                variant="alarm"
                outline
                alignLeft
                icon="star"
                style={{ width: '8rem' }}
              >
                Label
              </ix-pill>
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
              <ix-chip closable outline>
                Primary
              </ix-chip>
              <ix-chip icon="print">Primary with icon</ix-chip>
              <ix-chip
                icon="print"
                style={{ width: '10rem' }}
                closable
                onClose={console.log}
                onClick={console.log}
              >
                Primary
              </ix-chip>

              <ix-chip variant="critical" closable outline>
                Alarm
              </ix-chip>
              <ix-chip variant="alarm" icon="print">
                Alarm with icon
              </ix-chip>
              <ix-chip
                variant="alarm"
                icon="print"
                style={{ width: '10rem' }}
                closable
                onClose={console.log}
                onClick={console.log}
              >
                Alarm
              </ix-chip>
              <ix-chip
                variant="warning"
                icon="print"
                style={{ width: '10rem' }}
                closable
                onClose={console.log}
                onClick={console.log}
              >
                Warning
              </ix-chip>
              <ix-chip
                variant="info"
                icon="print"
                style={{ width: '10rem' }}
                closable
                onClose={console.log}
                onClick={console.log}
              >
                Info
              </ix-chip>
              <ix-chip
                variant="neutral"
                icon="print"
                style={{ width: '10rem' }}
                closable
                onClose={console.log}
                onClick={console.log}
              >
                Neutral
              </ix-chip>
              <ix-chip
                variant="critical"
                icon="print"
                style={{ width: '10rem' }}
                closable
                onClose={console.log}
                onClick={console.log}
              >
                Critical
              </ix-chip>
              <ix-chip
                variant="success"
                icon="print"
                style={{ width: '10rem' }}
                closable
                onClose={console.log}
                onClick={console.log}
              >
                Success
              </ix-chip>
              <ix-chip
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
              </ix-chip>
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
                <ix-button variant="Primary" outline>
                  Left
                </ix-button>
                <ix-button variant="Primary">Middle</ix-button>
                <ix-button variant="Primary" outline>
                  Right
                </ix-button>
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
              <ix-blind label="Blind">Blind content</ix-blind>
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
                <ix-button>Button</ix-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <ix-button disabled>Button</ix-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <ix-button outline>Button</ix-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <ix-button disabled outline>
                  Button
                </ix-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <ix-button ghost>Button</ix-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <ix-button disabled ghost>
                  Button
                </ix-button>
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
                <ix-button variant="Secondary">Button</ix-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <ix-button variant="Secondary" disabled>
                  Button
                </ix-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <ix-button variant="Secondary" outline>
                  Button
                </ix-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <ix-button variant="Secondary" disabled outline>
                  Button
                </ix-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <ix-button variant="Secondary" ghost>
                  Button
                </ix-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <ix-button variant="Secondary" disabled ghost>
                  Button
                </ix-button>
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
                <ix-button variant="Secondary" ghost selected>
                  Button
                </ix-button>
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
                <ix-icon-button icon="print" oval></ix-icon-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <ix-icon-button
                  icon="print"
                  oval
                  variant="Primary"
                ></ix-icon-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <ix-icon-button
                  icon="print"
                  oval
                  variant="Primary"
                  outline
                ></ix-icon-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <ix-icon-button
                  icon="print"
                  oval
                  variant="Primary"
                  ghost
                ></ix-icon-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <ix-icon-button icon="print" oval size="24"></ix-icon-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <ix-icon-button icon="print" oval size="16"></ix-icon-button>
                <div style={{ marginRight: '0.25rem' }}></div>
                <ix-icon-button icon="print" oval size="12"></ix-icon-button>
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
                <ix-split-button label="Test">
                  <ix-split-button-item label="Item 1" icon="print" />
                  <ix-split-button-item label="Item 2" icon="print" />
                  <ix-split-button-item label="Item 3" icon="print" />
                </ix-split-button>
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
              <ix-button id="triggerId">Dropdown</ix-button>
              <ix-dropdown
                trigger="triggerId"
                placement="bottom-start"
                header="Header"
              >
                <div class="dropdown-buttons">
                  <ix-icon-button invisible icon="cut"></ix-icon-button>
                  <ix-icon-button invisible icon="copy"></ix-icon-button>
                  <ix-icon-button invisible icon="paste"></ix-icon-button>
                  <ix-icon-button invisible icon="trashcan"></ix-icon-button>
                </div>
                <div class="dropdown-divider"></div>
                <ix-dropdown-item label="Item 1"></ix-dropdown-item>
                <ix-dropdown-item label="Item 2"></ix-dropdown-item>
                <ix-dropdown-item disabled label="Item 3"></ix-dropdown-item>
              </ix-dropdown>
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
                <ix-input-group style={{ marginBottom: '1rem' }}>
                  <span slot="input-start">Name</span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                </ix-input-group>

                <ix-input-group style={{ marginBottom: '2rem' }}>
                  <span slot="input-start">Price</span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                  <span slot="input-end">.00</span>
                  <span slot="input-end">$</span>
                </ix-input-group>

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
              <ix-expanding-search placeholder="Test..." />
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
        </ix-basic-navigation>
      </Host>
    );
  }
}
