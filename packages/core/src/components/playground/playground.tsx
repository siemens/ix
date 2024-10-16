/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Host, State, h } from '@stencil/core';
import { FilterState } from 'src/components';

/** @internal */
@Component({
  tag: 'ix-playground-internal',
  styleUrl: 'playground.scss',
  shadow: true,
})
export class PlaygroundInternal {
  @State() logs: string[] = [];

  @State() helperText?: string;

  @State() textareaValue: string | null = '';
  @State() inputValue: string | null = '';

  @State() filterState: FilterState = {
    categories: [],
    tokens: [],
  };

  @State() inputValueTwo: string = '';

  handleTextareaChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.textareaValue = target.value;
  }

  handleTextareaSubmit(event: Event) {
    event.preventDefault();
    this.logs = [...this.logs, '2 | Textarea value: ' + this.textareaValue];
  }

  handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
  }

  handleInputSubmit(event: Event) {
    event.preventDefault();
    this.logs = [...this.logs, '3 | Input value: ' + this.inputValue];
  }

  handleInputTwoChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputValueTwo = target.value;
  }

  handleInputTwoSubmit(event: Event) {
    event.preventDefault();
    this.logs = [...this.logs, '5 | Input value: ' + this.inputValueTwo];
  }

  render() {
    return (
      <Host style={{ width: '100%' }}>
        <ix-pane-layout>
          <ix-pane expanded slot="right" heading="Logs" size="33%">
            {this.logs.map((log, index) => (
              <ix-typography key={index} textColor="weak">
                {log}
              </ix-typography>
            ))}
          </ix-pane>
          <div
            slot="content"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              width: '100%',
              maxWidth: '40rem',
              boxSizing: 'border-box',
              padding: '2rem',
            }}
          >
            {/* 1. Improvement */}
            <div>
              <ix-typography format="h3" style={{ marginBottom: '0.5rem' }}>
                1. Improvement
              </ix-typography>
              <ix-typography textColor="weak" style={{ marginBottom: '1rem' }}>
                Tooltip for form fields with showTextAsTooltip set is also shown
                when there is no value.
              </ix-typography>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  width: '100%',
                }}
              >
                <ix-select
                  helperText={this.helperText}
                  showTextAsTooltip
                ></ix-select>
              </div>
            </div>

            {/* 2. Issue */}
            <div>
              <ix-typography format="h3" style={{ marginBottom: '0.5rem' }}>
                2. Issue
              </ix-typography>
              <ix-typography textColor="weak" style={{ marginBottom: '1rem' }}>
                Component ix-textarea is not able to process null.
              </ix-typography>
              <form
                onSubmit={(event) => this.handleTextareaSubmit(event)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  width: '100%',
                }}
              >
                <ix-textarea
                  value={this.textareaValue}
                  onInput={(event) => this.handleTextareaChange(event)}
                  maxLength={10}
                ></ix-textarea>
                <ix-button
                  outline
                  onClick={() => {
                    this.textareaValue = null;
                    this.logs = [
                      ...this.logs,
                      '2 | Set textarea value to: null (check console for error message)',
                    ];
                  }}
                >
                  Set textarea value to null (Logs)
                </ix-button>
                <ix-button type="submit">Submit (Logs)</ix-button>
              </form>
            </div>

            {/* 3. Improvement */}
            <div>
              <ix-typography format="h3" style={{ marginBottom: '0.5rem' }}>
                3. Improvement
              </ix-typography>
              <ix-typography textColor="weak" style={{ marginBottom: '1rem' }}>
                Length indicator should show 0/MAX_LENGTH even when the value is
                null.
              </ix-typography>
              <form
                onSubmit={(event) => this.handleInputSubmit(event)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  width: '100%',
                }}
              >
                <ix-input
                  value={this.inputValue}
                  onInput={(event) => this.handleInputChange(event)}
                  maxLength={10}
                ></ix-input>
                <ix-button
                  outline
                  onClick={() => {
                    this.inputValue = null;
                    this.logs = [...this.logs, '2 | Set input value to: null'];
                  }}
                >
                  Set input value to null (Logs)
                </ix-button>
                <ix-button type="submit">Submit (Logs)</ix-button>
              </form>
            </div>

            {/* 4. Improvement */}
            <div>
              <ix-typography format="h3" style={{ marginBottom: '0.5rem' }}>
                4. Improvement
              </ix-typography>
              <ix-typography textColor="weak" style={{ marginBottom: '1rem' }}>
                Component ix-category-filter is automatically focused when
                filterState is set programmatically.
              </ix-typography>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  width: '100%',
                }}
              >
                <ix-category-filter
                  filterState={this.filterState}
                ></ix-category-filter>
                <ix-button
                  outline
                  onClick={() => {
                    this.filterState = {
                      categories: [],
                      tokens: ['test'],
                    };
                  }}
                >
                  Set filter state
                </ix-button>
              </div>
            </div>

            {/* 5. Improvement */}
            <div>
              <ix-typography format="h3" style={{ marginBottom: '0.5rem' }}>
                5. Improvement
              </ix-typography>
              <ix-typography textColor="weak" style={{ marginBottom: '1rem' }}>
                If an input is required the error state is set initially,
                without the user taking an action.
              </ix-typography>
              <form
                onSubmit={(event) => this.handleInputTwoSubmit(event)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  width: '100%',
                }}
              >
                <ix-input
                  value={this.inputValueTwo}
                  onInput={(event) => this.handleInputTwoChange(event)}
                  required
                ></ix-input>
                <ix-button type="submit">Submit (Logs)</ix-button>
              </form>
            </div>

            {/* 6. Requirement */}
            <div>
              <ix-typography format="h3" style={{ marginBottom: '0.5rem' }}>
                6. Requirement
              </ix-typography>
              <ix-typography textColor="weak">
                When developing the onboarding console, we had the requirement
                of a draggable event list, which is in addition able to display
                an error state for each item. Therefore we created a custom
                event list similar to the ix component, where each item is
                draggable and indicates its state by changing the color of the
                left bar accordingly.
              </ix-typography>
            </div>

            {/* 7. Issue */}
            <div>
              <ix-typography format="h3" style={{ marginBottom: '0.5rem' }}>
                7. Issue
              </ix-typography>
              <ix-typography textColor="weak" style={{ marginBottom: '1rem' }}>
                The checkbox component as well as the card don't have cursor
                pointer.
              </ix-typography>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  width: '100%',
                }}
              >
                <ix-checkbox>My checkbox</ix-checkbox>
                <ix-card class="my-card" style={{ width: '100%' }}>
                  <ix-card-content>
                    <ix-typography>My card</ix-typography>
                  </ix-card-content>
                </ix-card>
              </div>
            </div>

            {/* 8. Requirement */}
            <div>
              <ix-typography format="h3" style={{ marginBottom: '0.5rem' }}>
                8. Requirement
              </ix-typography>
              <ix-typography textColor="weak" style={{ marginBottom: '1rem' }}>
                The ix-tooltip as well as globally styled elements like the HTML
                table are not displayed correctly inside a shadow dom. This is
                in principle working as intended since this is how a shadow dom
                works, but we should provide a solution for the tooltip as well
                as for components styled globally by ix like the HTML table
                (small css packages containing the corresponding classes).
              </ix-typography>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  width: '100%',
                }}
              >
                <ix-card class="my-card" style={{ width: '100%' }}>
                  <ix-card-content>
                    <ix-typography>
                      Tooltip should appear on hover
                    </ix-typography>
                  </ix-card-content>
                </ix-card>
                <ix-tooltip for=".my-card">Tooltip</ix-tooltip>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 9. Issue */}
            <div>
              <ix-typography format="h3" style={{ marginBottom: '0.5rem' }}>
                9. Issue
              </ix-typography>
              <ix-typography textColor="weak" style={{ marginBottom: '1rem' }}>
                The slot 'end' inside an ix-input has no margin to the right.
              </ix-typography>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  width: '100%',
                }}
              >
                <ix-input>
                  <span slot="end">End</span>
                </ix-input>
              </div>
            </div>
          </div>
        </ix-pane-layout>
      </Host>
    );
  }
}
