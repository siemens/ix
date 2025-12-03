/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IxModule } from '@siemens/ix-angular';

@Component({
  selector: 'app-time-input-form-test',
  standalone: true,
  imports: [IxModule, CommonModule],
  template: `
    <div style="padding: 1rem; font-size: 0.9rem">
      <h2 style="margin-bottom: 0.5rem">Time Input Validation Tests</h2>
      <div style="margin-bottom: 1rem; padding: 0.75rem; border-radius: 4px">
        <strong>Testing:</strong> Required field validation (red border) after blur. Format: HH:MM:SS
      </div>

      <button
        (click)="clearLogs()"
        style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; color: white; margin-bottom: 1rem; background-color: #757575">
        🧹 Clear Log
      </button>

      <!-- Grid Layout for Examples -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1rem">

        <!-- 1. Required Standalone -->
        <div style="border: 1px solid #f44336; padding: 1rem; border-radius: 4px">
          <h4 style="margin: 0 0 0.5rem 0; color: #c62828">1️⃣ Required (Standalone)</h4>
          <ix-time-input
            #requiredInput
            name="req1"
            label="Required Time"
            [required]="true"
            (valueChange)="onValueChange($event, '1️⃣')"
            (focus)="onFocus('1️⃣')"
            (blur)="onBlur('1️⃣')"
          ></ix-time-input>
          <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap">
            <button
              type="button"
              (click)="setEmpty(requiredInput, '1️⃣')"
              style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #757575; color: white">
              Empty
            </button>
            <button
              type="button"
              (click)="setValid(requiredInput, '1️⃣')"
              style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #4caf50; color: white">
              Valid
            </button>
            <button
              type="button"
              (click)="setInvalid(requiredInput, '1️⃣')"
              style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff9800; color: white">
              Invalid
            </button>
            <button
              type="button"
              (click)="triggerManualBlur(requiredInput, '1️⃣')"
              style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff5722; color: white">
              Manual Blur
            </button>
            <button
              type="button"
              (click)="clearInput(requiredInput, '1️⃣')"
              style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #9c27b0; color: white">
              Clear()
            </button>
          </div>
        </div>

        <!-- 2. Optional Standalone -->
        <div style="border: 1px solid #4caf50; padding: 1rem; border-radius: 4px">
          <h4 style="margin: 0 0 0.5rem 0; color: #2e7d32">2️⃣ Optional (Standalone)</h4>
          <ix-time-input
            #optionalInput
            name="opt1"
            label="Optional Time"
            (valueChange)="onValueChange($event, '2️⃣')"
            (focus)="onFocus('2️⃣')"
            (blur)="onBlur('2️⃣')"
          ></ix-time-input>
          <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap">
            <button
              type="button"
              (click)="setEmpty(optionalInput, '2️⃣')"
              style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #757575; color: white">
              Empty
            </button>
            <button
              type="button"
              (click)="setValid(optionalInput, '2️⃣')"
              style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #4caf50; color: white">
              Valid
            </button>
            <button
              type="button"
              (click)="setInvalid(optionalInput, '2️⃣')"
              style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff9800; color: white">
              Invalid
            </button>
            <button
              type="button"
              (click)="triggerManualBlur(optionalInput, '2️⃣')"
              style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff5722; color: white">
              Manual Blur
            </button>
            <button
              type="button"
              (click)="clearInput(optionalInput, '2️⃣')"
              style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #9c27b0; color: white">
              Clear()
            </button>
          </div>
        </div>

        <!-- 3. Form Required -->
        <div style="border: 1px solid #2196F3; padding: 1rem; border-radius: 4px">
          <h4 style="margin: 0 0 0.5rem 0; color: #1565c0">3️⃣ Required (In Form)</h4>
          <form (submit)="onFormSubmit($event, '3️⃣')">
            <ix-time-input
              #formRequiredInput
              name="formReq"
              label="Required Time"
              [required]="true"
              (valueChange)="onValueChange($event, '3️⃣')"
              (focus)="onFocus('3️⃣')"
              (blur)="onBlur('3️⃣')"
            ></ix-time-input>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap">
              <button
                type="submit"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #2196F3; color: white">
                Submit
              </button>
              <button
                type="button"
                (click)="setEmpty(formRequiredInput, '3️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #757575; color: white">
                Empty
              </button>
              <button
                type="button"
                (click)="setValid(formRequiredInput, '3️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #4caf50; color: white">
                Valid
              </button>
              <button
                type="button"
                (click)="setInvalid(formRequiredInput, '3️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff9800; color: white">
                Invalid
              </button>
              <button
                type="button"
                (click)="triggerManualBlur(formRequiredInput, '3️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff5722; color: white">
                Manual Blur
              </button>
              <button
                type="button"
                (click)="clearInput(formRequiredInput, '3️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #9c27b0; color: white">
                Clear()
              </button>
            </div>
          </form>
        </div>

        <!-- 4. Form Optional -->
        <div style="border: 1px solid #009688; padding: 1rem; border-radius: 4px">
          <h4 style="margin: 0 0 0.5rem 0; color: #00695c">4️⃣ Optional (In Form)</h4>
          <form (submit)="onFormSubmit($event, '4️⃣')">
            <ix-time-input
              #formOptionalInput
              name="formOpt"
              label="Optional Time"
              (valueChange)="onValueChange($event, '4️⃣')"
              (focus)="onFocus('4️⃣')"
              (blur)="onBlur('4️⃣')"
            ></ix-time-input>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap">
              <button
                type="submit"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #2196F3; color: white">
                Submit
              </button>
              <button
                type="button"
                (click)="setEmpty(formOptionalInput, '4️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #757575; color: white">
                Empty
              </button>
              <button
                type="button"
                (click)="setValid(formOptionalInput, '4️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #4caf50; color: white">
                Valid
              </button>
              <button
                type="button"
                (click)="setInvalid(formOptionalInput, '4️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff9800; color: white">
                Invalid
              </button>
              <button
                type="button"
                (click)="triggerManualBlur(formOptionalInput, '4️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff5722; color: white">
                Manual Blur
              </button>
              <button
                type="button"
                (click)="clearInput(formOptionalInput, '4️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #9c27b0; color: white">
                Clear()
              </button>
            </div>
          </form>
        </div>

        <!-- 5. NoValidate Required -->
        <div style="border: 1px solid #ff9800; padding: 1rem; border-radius: 4px">
          <h4 style="margin: 0 0 0.5rem 0; color: #e65100">5️⃣ Required (NoValidate Form)</h4>
          <form [attr.novalidate]="true" (submit)="onFormSubmit($event, '5️⃣')">
            <ix-time-input
              #noValidateRequiredInput
              name="noValReq"
              label="Required Time"
              [required]="true"
              (valueChange)="onValueChange($event, '5️⃣')"
              (focus)="onFocus('5️⃣')"
              (blur)="onBlur('5️⃣')"
            ></ix-time-input>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap">
              <button
                type="submit"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #2196F3; color: white">
                Submit
              </button>
              <button
                type="button"
                (click)="setEmpty(noValidateRequiredInput, '5️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #757575; color: white">
                Empty
              </button>
              <button
                type="button"
                (click)="setValid(noValidateRequiredInput, '5️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #4caf50; color: white">
                Valid
              </button>
              <button
                type="button"
                (click)="setInvalid(noValidateRequiredInput, '5️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff9800; color: white">
                Invalid
              </button>
              <button
                type="button"
                (click)="triggerManualBlur(noValidateRequiredInput, '5️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff5722; color: white">
                Manual Blur
              </button>
              <button
                type="button"
                (click)="clearInput(noValidateRequiredInput, '5️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #9c27b0; color: white">
                Clear()
              </button>
            </div>
          </form>
        </div>

        <!-- 6. NoValidate Optional -->
        <div style="border: 1px solid #9c27b0; padding: 1rem; border-radius: 4px">
          <h4 style="margin: 0 0 0.5rem 0; color: #6a1b9a">6️⃣ Optional (NoValidate Form)</h4>
          <form [attr.novalidate]="true" (submit)="onFormSubmit($event, '6️⃣')">
            <ix-time-input
              #noValidateOptionalInput
              name="noValOpt"
              label="Optional Time"
              (valueChange)="onValueChange($event, '6️⃣')"
              (focus)="onFocus('6️⃣')"
              (blur)="onBlur('6️⃣')"
            ></ix-time-input>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap">
              <button
                type="submit"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #2196F3; color: white">
                Submit
              </button>
              <button
                type="button"
                (click)="setEmpty(noValidateOptionalInput, '6️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #757575; color: white">
                Empty
              </button>
              <button
                type="button"
                (click)="setValid(noValidateOptionalInput, '6️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #4caf50; color: white">
                Valid
              </button>
              <button
                type="button"
                (click)="setInvalid(noValidateOptionalInput, '6️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff9800; color: white">
                Invalid
              </button>
              <button
                type="button"
                (click)="triggerManualBlur(noValidateOptionalInput, '6️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff5722; color: white">
                Manual Blur
              </button>
              <button
                type="button"
                (click)="clearInput(noValidateOptionalInput, '6️⃣')"
                style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #9c27b0; color: white">
                Clear()
              </button>
            </div>
          </form>
        </div>

      </div> <!-- End of grid -->

      <!-- Event Log -->
      <div style="margin-top: 1rem">
        <h3 style="margin: 0 0 0.5rem 0">🪵 Event Log</h3>
        <div style="border: 1px solid #ccc; border-radius: 4px; padding: 0.75rem; max-height: 300px; overflow-y: auto; font-family: monospace; font-size: 0.8rem">
          <div *ngIf="logs.length === 0" style="color: #666; font-style: italic">
            No events yet... Interact with fields above
          </div>
          <div *ngFor="let log of logs" [style.color]="getLogColor(log)" style="margin-bottom: 1px; padding: 1px 0">
            {{ log }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class TimeInputFormTestComponent {
  logs: string[] = [];

  private addLog(message: string): void {
    const timestamp = new Date().toLocaleTimeString();
    this.logs.push(`[${timestamp}] ${message}`);
  }

  onValueChange(event: any, emoji: string): void {
    const value = event?.detail ?? 'empty';
    this.addLog(`${emoji} Value: "${value}"`);
  }

  onFocus(emoji: string): void {
    this.addLog(`${emoji} Focus`);
  }

  onBlur(emoji: string): void {
    this.addLog(`${emoji} Blur`);
  }

  onFormSubmit(event: Event, emoji: string): void {
    event.preventDefault();
    this.addLog(`${emoji} Form submitted`);
  }

  setEmpty(input: any, emoji: string): void {
    if (input?.nativeElement) {
      input.nativeElement.value = '';
    }
  }

  setValid(input: any, emoji: string): void {
    if (input?.nativeElement) {
      input.nativeElement.value = '14:30:00';
    }
  }

  setInvalid(input: any, emoji: string): void {
    if (input?.nativeElement) {
      input.nativeElement.value = 'invalid';
    }
  }

  async triggerManualBlur(input: any, emoji: string): Promise<void> {
    const element = input?.nativeElement;
    if (element) {
      await this.triggerNativeBlur(element);
      setTimeout(() => this.debugValidationState(element, `${emoji} MANUAL`), 100);
    }
  }

  async clearInput(input: any, emoji: string): Promise<void> {
    const element = input?.nativeElement;
    if (element && typeof element.clear === 'function') {
      await element.clear();
      this.addLog(`${emoji} Cleared`);
    }
  }

  clearLogs(): void {
    this.logs = [];
  }

  private async debugValidationState(element: any, label: string): Promise<void> {
    if (!element) {
      this.addLog(`${label} - Element not available`);
      return;
    }

    const classList = Array.from(element.classList);
    const hasRequiredClass = classList.includes('ix-invalid--required');
    const required = element.required;
    const value = element.value;

    let touched = 'unknown';
    try {
      if (typeof element.isTouched === 'function') {
        touched = String(await element.isTouched());
      }
    } catch {
      touched = 'error';
    }

    this.addLog(`${label} - Req:${required}, Val:"${value}", Touch:${touched}, RedClass:${hasRequiredClass}`);
  }

  private async triggerNativeBlur(element: any): Promise<void> {
    if (!element) return;
    try {
      const nativeInput = await element.getNativeInputElement();
      if (nativeInput) {
        nativeInput.dispatchEvent(new FocusEvent('blur', { bubbles: true }));
        this.addLog('✅ Native blur triggered');
      }
    } catch (error) {
      this.addLog(`❌ Error: ${error}`);
    }
  }

  getLogColor(message: string): string {
    const isError = message.includes('❌');
    const isDebug = message.includes('BLUR') || message.includes('FOCUS') || message.includes('MANUAL');
    if (isError) {
      return '#d32f2f';
    } else if (isDebug) {
      return '#1976d2';
    }
    return 'inherit';
  }
}

export default TimeInputFormTestComponent;
