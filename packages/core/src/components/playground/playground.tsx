/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import { Component, h, Host, State } from '@stencil/core';

/** @internal */
@Component({
  tag: 'ix-playground-internal',
  styleUrl: 'playground.scss',
  // shadow: true,
  // Set scoped=true and shadow=false to test global styles like checkbox etc
  scoped: true,
})
export class PlaygroundInternal {
  @State() promt: string = undefined;
  @State() showT1: boolean = false;
  constructor() {
    setTimeout(() => {
      this.showT1 = true;
    }, 2000);
  }

  render() {
    return (
      <Host>
        <ix-application>
          <ix-application-header name="My Application">
            <placeholder-logo slot="logo"></placeholder-logo>
          </ix-application-header>
          <ix-menu>
            <ix-menu-item icon="ai">Industrial Copilot</ix-menu-item>
          </ix-menu>

          <ix-content>
            <ix-content-header
              slot="header"
              header-title="Industrial Copilot"
            ></ix-content-header>

            <ix-chat
              allowAttachments
              onChatSubmit={(e) => (this.promt = e.detail)}
            >
              <ix-button variant="secondary" slot="topics">
                Any best practices for UI design?
              </ix-button>
              <ix-button variant="secondary" slot="topics">
                Tell me about a11y!
              </ix-button>

              <ix-chat-message sender="You" icon="user">
                What is the difference between SIMATIC S7 1500 and SIMATIC S7
                1200?
              </ix-chat-message>
              <ix-chat-message
                sender="Industrial Copilot"
                icon="ai"
                icon-color="color-primary"
              >
                {this.showT1 ? (
                  <div>
                    SIMATIC S7 1500 and SIMATIC S7 1200 are both programmable
                    logic controllers (PLCs) manufactured by Siemens. While they
                    are part of the same SIMATIC S7 family, there are several
                    differences between the two models:{' '}
                    <ol>
                      <li>
                        Performance: The S7 1500 offers higher performance
                        compared to the S7 1200. It has a faster processor,
                        larger memory capacity, and supports more complex
                        automation tasks.
                      </li>
                      <li>
                        {' '}
                        Scalability: The S7 1500 is designed for larger and more
                        complex automation systems, making it suitable for
                        applications that require a greater number of
                        inputs/outputs (I/O). The S7 1200, on the other hand, is
                        more compact and suitable for smaller applications with
                        fewer I/O requirements.
                      </li>
                      <li>
                        {' '}
                        Communication: The S7 1500 offers more advanced
                        communication capabilities, including support for
                        PROFINET, PROFIBUS, and other industrial communication
                        protocols. The S7 1200 also supports these protocols but
                        may have some limitations in terms of connectivity
                        options.{' '}
                      </li>
                      <li>
                        {' '}
                        Integrated Safety: The S7 1500 has integrated safety
                        functions, allowing for the implementation of
                        safety-related applications without the need for
                        additional safety controllers. The S7 1200, on the other
                        hand, requires an additional safety module for
                        implementing safety functions.
                      </li>
                      <li>
                        {' '}
                        Modular Design: The S7 1500 has a modular design,
                        allowing for easy expansion and customization with
                        various modules and accessories. The S7 1200 is more
                        compact and has limited expansion options.
                      </li>
                    </ol>{' '}
                    In summary, the S7 1500 offers higher performance,
                    scalability, advanced communication capabilities, integrated
                    safety functions, and modular design compared to the S7
                    1200. The choice between the two depends on the specific
                    requirements of the automation application.
                  </div>
                ) : (
                  <div>
                    Certainly! Thinking.. <ix-spinner></ix-spinner>
                  </div>
                )}
              </ix-chat-message>
              {this.promt && (
                <div>
                  <ix-chat-message sender="You" icon="user">
                    {this.promt}
                  </ix-chat-message>
                  <ix-chat-message
                    sender="Industrial Copilot"
                    icon="ai"
                    icon-color="color-primary"
                  >
                    <div>
                      Certainly! Thinking.. <ix-spinner></ix-spinner>
                    </div>
                  </ix-chat-message>
                </div>
              )}
            </ix-chat>
          </ix-content>
        </ix-application>
      </Host>
    );
  }
}
