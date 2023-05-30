/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-spinner',
  styleUrl: 'spinner.scss',
  shadow: true,
})
export class Spinner {
  /**
   * Variant of spinner
   */
  @Prop() variant: 'primary' | 'secondary' = 'secondary';

  /**
   * Size of spinner
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  render() {
    return (
      <Host
        class={{
          primary: this.variant === 'primary',
          large: this.size === 'large',
          small: this.size === 'small',
        }}
      >
        <svg
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="waiting-anim"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="stroke"
              transform="translate(4.5, 3)"
              fill-rule="nonzero"
              stroke="#0F8287"
              stroke-linejoin="round"
            >
              <polygon
                id="w1"
                points="11.2583302 0 11.2583302 6.5 11.2583302 13"
                visibility="hidden"
              >
                <set
                  attributeName="visibility"
                  begin="0s;w6ul.end"
                  to="visible"
                />
                <animate
                  id="w1l"
                  attributeName="points"
                  calcMode="spline"
                  begin="0s;w6ul.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="11.2583302 0 11.2583302 6.5 11.2583302 13"
                  to="11.2583302 0 22.5166605 6.5 11.2583302 13"
                  keySplines="1 0 0.8 1"
                  fill="freeze"
                />
                <animate
                  id="w1ul"
                  attributeName="points"
                  calcMode="spline"
                  begin="f6uf.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="11.2583302 0 22.5166605 6.5 11.2583302 13"
                  to="16.88749535 9.25 22.5166605 6.5 11.2583302 13"
                  keySplines="0.2 0 0 1"
                  fill="freeze"
                />
                <set attributeName="visibility" begin="w1ul.end" to="hidden" />
              </polygon>

              <polygon
                id="w2"
                points="22.5166605 6.5 16.88749535 10 11.2583302 13"
                visibility="hidden"
              >
                <set attributeName="visibility" begin="w1l.end" to="visible" />
                <animate
                  id="w2l"
                  attributeName="points"
                  calcMode="spline"
                  begin="w1l.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="22.5166605 6.5 16.88749535 10 11.2583302 13"
                  to="22.5166605 6.5 22.5166605 19.5 11.2583302 13"
                  keySplines="1 0 0.8 1"
                  fill="freeze"
                />
                <animate
                  id="w2ul"
                  attributeName="points"
                  calcMode="spline"
                  begin="w1ul.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="22.5166605 6.5 22.5166605 19.5 11.2583302 13"
                  to="16.88749535 16.25 22.5166605 19.5 11.2583302 13"
                  keySplines="0.2 0 0 1"
                  fill="freeze"
                />
                <set attributeName="visibility" begin="w2ul.end" to="hidden" />
              </polygon>

              <polygon
                id="w3"
                points="11.2583302 13 22.5166605 19.5 16.88749535 16.75"
                visibility="hidden"
              >
                <set attributeName="visibility" begin="w2l.end" to="visible" />
                <animate
                  id="w3l"
                  attributeName="points"
                  calcMode="spline"
                  begin="w2l.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="11.2583302 13 22.5166605 19.5 16.88749535 16.75"
                  to="11.2583302 13 22.5166605 19.5 11.2583302 26"
                  keySplines="1 0 0.8 1"
                  fill="freeze"
                />
                <animate
                  id="w3ul"
                  attributeName="points"
                  calcMode="spline"
                  begin="w2ul.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="11.2583302 13 22.5166605 19.5 11.2583302 26"
                  to="11.2583302 13 11.2583302 19.5 11.2583302 26"
                  keySplines="0.2 0 0 1"
                  fill="freeze"
                />
                <set attributeName="visibility" begin="w3ul.end" to="hidden" />
              </polygon>

              <polygon
                id="w4"
                points="11.2583302 26 11.2583302 19.5 11.2583302 13"
                visibility="hidden"
              >
                <set attributeName="visibility" begin="w3l.end" to="visible" />
                <animate
                  id="w4l"
                  attributeName="points"
                  calcMode="spline"
                  begin="w3l.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="11.2583302 26 11.2583302 19.5 11.2583302 13"
                  to="11.2583302 26 4.4408921e-15 19.5 11.2583302 13"
                  keySplines="1 0 0.8 1"
                  fill="freeze"
                />
                <animate
                  id="w4ul"
                  attributeName="points"
                  calcMode="spline"
                  begin="w3ul.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="11.2583302 26 4.4408921e-15 19.5 11.2583302 13"
                  to="5.62651 16.25 4.4408921e-15 19.5 11.2583302 13"
                  keySplines="0.2 0 0 1"
                  fill="freeze"
                />
                <set attributeName="visibility" begin="w4ul.end" to="hidden" />
              </polygon>

              <polygon
                id="w5"
                points="11.2583302 13 2.4062463e-14 19.5 5.6291651 16.25"
                visibility="hidden"
              >
                <set attributeName="visibility" begin="w4l.end" to="visible" />
                <animate
                  id="w5l"
                  attributeName="points"
                  calcMode="spline"
                  begin="w4l.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="11.2583302 13 2.4062463e-14 19.5 5.6291651 16.25"
                  to="11.2583302 13 2.4062463e-14 19.5 1.687539e-14 6.5"
                  keySplines="1 0 0.8 1"
                  fill="freeze"
                />
                <animate
                  id="w5ul"
                  attributeName="points"
                  calcMode="spline"
                  begin="w4ul.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="11.2583302 13 2.4062463e-14 19.5 1.687539e-14 6.5"
                  to="11.2583302 13 5.6291651 9.75 1.687539e-14 6.5"
                  keySplines="0.2 0 0 1"
                  fill="freeze"
                />
                <set attributeName="visibility" begin="w5ul.end" to="hidden" />
              </polygon>

              <polygon
                id="w6"
                points="5.6291651 9.75 11.2583302 13 2.66453526e-15 6.5"
                visibility="hidden"
              >
                <set attributeName="visibility" begin="w5l.end" to="visible" />
                <animate
                  id="w6l"
                  attributeName="points"
                  calcMode="spline"
                  begin="w5l.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="5.6291651 9.75 11.2583302 13 2.66453526e-15 6.5"
                  to="11.2583302 0 11.2583302 13 2.66453526e-15 6.5"
                  keySplines="1 0 0.8 1"
                  fill="freeze"
                />
                <animate
                  id="w6ul"
                  attributeName="points"
                  calcMode="spline"
                  begin="w5ul.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="11.2583302 0 11.2583302 13 2.66453526e-15 6.5"
                  to="11.2583302 0 11.2583302 13 11.2583302 6.5"
                  keySplines="0.2 0 0 1"
                  fill="freeze"
                />
                <set attributeName="visibility" begin="w6ul.end" to="hidden" />
              </polygon>
            </g>
            <g
              id="fill"
              transform="translate(4.5, 3)"
              fill="#0F8287"
              fill-rule="nonzero"
            >
              <polygon
                id="f1"
                points="11.2583302 0 11.2583302 6.5 11.2583302 13"
                visibility="hidden"
              >
                <set attributeName="visibility" begin="w6l.end" to="visible" />
                <animate
                  id="f1f"
                  attributeName="points"
                  calcMode="spline"
                  begin="w6l.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="11.2583302 0 11.2583302 6.5 11.2583302 13"
                  to="11.2583302 0 22.5166605 6.5 11.2583302 13"
                  keySplines="1 0 0.8 1"
                  fill="freeze"
                />
                <animate
                  id="f1uf"
                  attributeName="points"
                  calcMode="spline"
                  begin="f6f.end + 0.2s"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="11.2583302 0 22.5166605 6.5 11.2583302 13"
                  to="16.88749535 9.25 22.5166605 6.5 11.2583302 13"
                  keySplines="0.2 0 0 1"
                  fill="freeze"
                />
                <set attributeName="visibility" begin="f1uf.end" to="hidden" />
              </polygon>

              <polygon
                id="f2"
                points="22.5166605 6.5 16.88749535 10 11.2583302 13"
                visibility="hidden"
              >
                <set attributeName="visibility" begin="f1f.end" to="visible" />
                <animate
                  id="f2f"
                  attributeName="points"
                  calcMode="spline"
                  begin="f1f.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="22.5166605 6.5 16.88749535 10 11.2583302 13"
                  to="22.5166605 6.5 22.5166605 19.5 11.2583302 13"
                  keySplines="1 0 0.8 1"
                  fill="freeze"
                />
                <animate
                  id="f2uf"
                  attributeName="points"
                  calcMode="spline"
                  begin="f1uf.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="22.5166605 6.5 22.5166605 19.5 11.2583302 13"
                  to="16.88749535 16.25 22.5166605 19.5 11.2583302 13"
                  keySplines="0.2 0 0 1"
                  fill="freeze"
                />
                <set attributeName="visibility" begin="f2uf.end" to="hidden" />
              </polygon>

              <polygon
                id="f3"
                points="11.2583302 13 22.5166605 19.5 16.88749535 16.75"
                visibility="hidden"
              >
                <set attributeName="visibility" begin="f2f.end" to="visible" />
                <animate
                  id="f3f"
                  attributeName="points"
                  calcMode="spline"
                  begin="f2f.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="11.2583302 13 22.5166605 19.5 16.88749535 16.75"
                  to="11.2583302 13 22.5166605 19.5 11.2583302 26"
                  keySplines="1 0 0.8 1"
                  fill="freeze"
                />
                <animate
                  id="f3uf"
                  attributeName="points"
                  calcMode="spline"
                  begin="f2uf.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="11.2583302 13 22.5166605 19.5 11.2583302 26"
                  to="11.2583302 13 11.2583302 19.5 11.2583302 26"
                  keySplines="0.2 0 0 1"
                  fill="freeze"
                />
                <set attributeName="visibility" begin="f3uf.end" to="hidden" />
              </polygon>

              <polygon
                id="f4"
                points="11.2583302 26 11.2583302 19.5 11.2583302 13"
                visibility="hidden"
              >
                <set attributeName="visibility" begin="f3f.end" to="visible" />
                <animate
                  id="f4f"
                  attributeName="points"
                  calcMode="spline"
                  begin="f3f.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="11.2583302 26 11.2583302 19.5 11.2583302 13"
                  to="11.2583302 26 4.4408921e-15 19.5 11.2583302 13"
                  keySplines="1 0 0.8 1"
                  fill="freeze"
                />
                <animate
                  id="f4uf"
                  attributeName="points"
                  calcMode="spline"
                  begin="f3uf.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="11.2583302 26 4.4408921e-15 19.5 11.2583302 13"
                  to="5.62651 16.25 4.4408921e-15 19.5 11.2583302 13"
                  keySplines="0.2 0 0 1"
                  fill="freeze"
                />
                <set attributeName="visibility" begin="f4uf.end" to="hidden" />
              </polygon>

              <polygon
                id="f5"
                points="11.2583302 13 2.4062463e-14 19.5 5.6291651 16.25"
                visibility="hidden"
              >
                <set attributeName="visibility" begin="f4f.end" to="visible" />
                <animate
                  id="f5f"
                  attributeName="points"
                  calcMode="spline"
                  begin="f4f.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="11.2583302 13 2.4062463e-14 19.5 5.6291651 16.25"
                  to="11.2583302 13 2.4062463e-14 19.5 1.687539e-14 6.5"
                  keySplines="1 0 0.8 1"
                  fill="freeze"
                />
                <animate
                  id="f5uf"
                  attributeName="points"
                  calcMode="spline"
                  begin="f4uf.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="11.2583302 13 2.4062463e-14 19.5 1.687539e-14 6.5"
                  to="11.2583302 13 5.6291651 9.75 1.687539e-14 6.5"
                  keySplines="0.2 0 0 1"
                  fill="freeze"
                />
                <set attributeName="visibility" begin="f5uf.end" to="hidden" />
              </polygon>

              <polygon
                id="f6"
                points="5.6291651 9.75 11.2583302 13 2.66453526e-15 6.5"
                visibility="hidden"
              >
                <set attributeName="visibility" begin="f5f.end" to="visible" />
                <animate
                  id="f6f"
                  attributeName="points"
                  calcMode="spline"
                  begin="f5f.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="5.6291651 9.75 11.2583302 13 2.66453526e-15 6.5"
                  to="11.2583302 0 11.2583302 13 2.66453526e-15 6.5"
                  keySplines="1 0 0.8 1"
                  fill="freeze"
                />
                <animate
                  id="f6uf"
                  attributeName="points"
                  calcMode="spline"
                  begin="f5uf.end"
                  dur="0.4s"
                  keyTimes="0;1"
                  from="11.2583302 0 11.2583302 13 2.66453526e-15 6.5"
                  to="11.2583302 0 11.2583302 13 11.2583302 6.5"
                  keySplines="0.2 0 0 1"
                  fill="freeze"
                />
                <set attributeName="visibility" begin="f6uf.end" to="hidden" />
              </polygon>
            </g>
          </g>
        </svg>
      </Host>
    );
  }
}
