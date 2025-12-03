/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './time-input-form-test.html',
})
export default class TimeInputFormTest implements AfterViewInit {
  @ViewChild('requiredInput') requiredInput!: ElementRef;
  @ViewChild('optionalInput') optionalInput!: ElementRef;
  @ViewChild('formRequiredInput') formRequiredInput!: ElementRef;
  @ViewChild('rangeStartInput') rangeStartInput!: ElementRef;
  @ViewChild('rangeEndInput') rangeEndInput!: ElementRef;

  logs: string[] = [];
  testForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.testForm = this.fb.group({
      requiredTime: ['', Validators.required],
      optionalTime: ['']
    });
  }

  ngAfterViewInit(): void {
    this.addLog('🔧 Component initialized with ViewChild references');
  }

  onValueChange(event: CustomEvent, emoji: string): void {
    const value = event.detail;
    this.addLog(`${emoji} Value changed: ${value || 'empty'}`);
  }

  onFocus(emoji: string): void {
    this.addLog(`${emoji} 🔍 Focus`);
  }

  onBlur(emoji: string): void {
    this.addLog(`${emoji} 😴 Blur`);
  }

  onFormSubmit(event: Event, emoji: string): void {
    event.preventDefault();
    this.addLog(`${emoji} Form submitted`);
    this.addLog(`Form valid: ${this.testForm.valid}`);
    this.addLog(`Form values: ${JSON.stringify(this.testForm.value)}`);
  }

  addLog(message: string): void {
    const timestamp = new Date().toLocaleTimeString();
    this.logs.push(`[${timestamp}] ${message}`);
    if (this.logs.length > 50) {
      this.logs = this.logs.slice(-50);
    }
  }

  clearLogs(): void {
    this.addLog('🧹 Clear logs button clicked');
    this.logs = [];
  }

  setEmpty(inputComponent: any, emoji: string): void {
    this.addLog(`${emoji} 🔘 Empty button clicked`);
    try {
      const element = inputComponent?.nativeElement;
      
      if (element) {
        // Method 1: Set value and dispatch events to trigger validation
        element.value = '';
        
        // Trigger input event to notify the component of value change
        element.dispatchEvent(new Event('input', { bubbles: true }));
        
        // Trigger change event for additional validation clearing
        element.dispatchEvent(new Event('change', { bubbles: true }));
        
        // Trigger blur to ensure validation state updates
        setTimeout(() => {
          element.dispatchEvent(new Event('blur', { bubbles: true }));
        }, 10);
        
        this.addLog(`${emoji} Cleared via nativeElement with events`);
        
        // Method 2: Try component-specific clear method if available
        if (inputComponent.clear && typeof inputComponent.clear === 'function') {
          inputComponent.clear();
          this.addLog(`${emoji} Also called component.clear()`);
        }
        
        // Method 3: Try setting component value property
        if (inputComponent.value !== undefined) {
          inputComponent.value = '';
          this.addLog(`${emoji} Also set component.value`);
        }
        
      } else if (inputComponent?.value !== undefined) {
        inputComponent.value = '';
        this.addLog(`${emoji} Set via component.value`);
      } else {
        this.addLog(`${emoji} ❌ Could not clear - unknown component structure`);
        console.log('Input component:', inputComponent);
      }
    } catch (error) {
      this.addLog(`${emoji} ❌ Error clearing input: ${error}`);
    }
  }

  setValid(inputComponent: any, emoji: string): void {
    this.addLog(`${emoji} ✅ Valid button clicked`);
    try {
      const validTime = '14:30:00';
      if (inputComponent?.nativeElement) {
        inputComponent.nativeElement.value = validTime;
        this.addLog(`${emoji} Set via nativeElement.value: ${validTime}`);
      } else if (inputComponent?.value !== undefined) {
        inputComponent.value = validTime;
        this.addLog(`${emoji} Set via component.value: ${validTime}`);
      } else {
        this.addLog(`${emoji} ❌ Could not set valid time - unknown component structure`);
        console.log('Input component:', inputComponent);
      }
    } catch (error) {
      this.addLog(`${emoji} ❌ Error setting valid time: ${error}`);
    }
  }

  setInvalid(inputComponent: any, emoji: string): void {
    this.addLog(`${emoji} ❌ Invalid button clicked`);
    try {
      const invalidTime = '25:99:99';
      if (inputComponent?.nativeElement) {
        inputComponent.nativeElement.value = invalidTime;
        this.addLog(`${emoji} Set via nativeElement.value: ${invalidTime}`);
      } else if (inputComponent?.value !== undefined) {
        inputComponent.value = invalidTime;
        this.addLog(`${emoji} Set via component.value: ${invalidTime}`);
      } else {
        this.addLog(`${emoji} ❌ Could not set invalid time - unknown component structure`);
        console.log('Input component:', inputComponent);
      }
    } catch (error) {
      this.addLog(`${emoji} ❌ Error setting invalid time: ${error}`);
    }
  }

  triggerManualBlur(inputComponent: any, emoji: string): void {
    this.addLog(`${emoji} 🔶 Manual blur button clicked`);
    try {
      if (inputComponent?.nativeElement?.blur) {
        inputComponent.nativeElement.blur();
        this.addLog(`${emoji} Blur triggered via nativeElement.blur()`);
      } else if (inputComponent?.blur) {
        inputComponent.blur();
        this.addLog(`${emoji} Blur triggered via component.blur()`);
      } else {
        this.addLog(`${emoji} ❌ Could not trigger blur - no blur method found`);
        console.log('Input component:', inputComponent);
      }
    } catch (error) {
      this.addLog(`${emoji} ❌ Error triggering blur: ${error}`);
    }
  }

  clearInput(inputComponent: any, emoji: string): void {
    this.addLog(`${emoji} 🧹 Clear button clicked`);
    
    try {
      // Method 1: Try to call the IX component's internal clear method first
      if (inputComponent && typeof inputComponent.clear === 'function') {
        inputComponent.clear();
        this.addLog(`${emoji} ✅ Called IX component.clear() method`);
      } else {
        this.addLog(`${emoji} ⚠️ No clear() method found on IX component`);
      }
      
      // Method 2: Try calling clear on the native element if it exists
      const element = inputComponent?.nativeElement;
      if (element && typeof element.clear === 'function') {
        element.clear();
        this.addLog(`${emoji} ✅ Called nativeElement.clear() method`);
      } else {
        this.addLog(`${emoji} ⚠️ No clear() method found on native element`);
      }
      
      // Method 3: Fallback to setEmpty which sets value and triggers events
      this.setEmpty(inputComponent, emoji);
      
      // Method 4: Force validation update by triggering focus and blur
      setTimeout(() => {
        if (element && element.focus && element.blur) {
          element.focus();
          setTimeout(() => element.blur(), 10);
          this.addLog(`${emoji} 🔄 Triggered focus/blur for validation update`);
        }
      }, 20);
      
    } catch (error) {
      this.addLog(`${emoji} ❌ Error in clearInput: ${error}`);
      // Fallback to setEmpty if there's an error
      this.setEmpty(inputComponent, emoji);
    }
  }

  setTimeRange(): void {
    this.addLog('4️⃣ ⏰ Setting work hours (9:00 - 17:00)');
    try {
      if (this.rangeStartInput?.nativeElement) {
        this.rangeStartInput.nativeElement.value = '09:00:00';
        this.addLog('4️⃣ Start time set to 9:00 AM');
      }
      if (this.rangeEndInput?.nativeElement) {
        this.rangeEndInput.nativeElement.value = '17:00:00';
        this.addLog('4️⃣ End time set to 5:00 PM');
      }
    } catch (error) {
      this.addLog(`4️⃣ ❌ Error setting work hours: ${error}`);
    }
  }

  setMeetingTimes(): void {
    this.addLog('4️⃣ 📅 Setting meeting times (14:00 - 15:30)');
    try {
      if (this.rangeStartInput?.nativeElement) {
        this.rangeStartInput.nativeElement.value = '14:00:00';
        this.addLog('4️⃣ Meeting start: 2:00 PM');
      }
      if (this.rangeEndInput?.nativeElement) {
        this.rangeEndInput.nativeElement.value = '15:30:00';
        this.addLog('4️⃣ Meeting end: 3:30 PM');
      }
    } catch (error) {
      this.addLog(`4️⃣ ❌ Error setting meeting times: ${error}`);
    }
  }

  setCurrentTime(): void {
    this.addLog('4️⃣ 🕐 Setting current time');
    try {
      const now = new Date();
      const timeString = now.toTimeString().split(' ')[0]; // Gets HH:MM:SS
      if (this.rangeStartInput?.nativeElement) {
        this.rangeStartInput.nativeElement.value = timeString;
        this.addLog(`4️⃣ Current time set: ${timeString}`);
      }
    } catch (error) {
      this.addLog(`4️⃣ ❌ Error setting current time: ${error}`);
    }
  }

  getLogColor(log: string): string {
    if (log.includes('❌')) return '#f44336';
    if (log.includes('✅')) return '#4caf50';
    if (log.includes('🔍')) return '#2196f3';
    if (log.includes('😴')) return '#ff9800';
    if (log.includes('⚠️')) return '#ff5722';
    return '#333';
  }
}