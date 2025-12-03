/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDateInput } from '@siemens/ix-react';
import { useState, useRef } from 'react';

export default function DateInputFormTest() {
  const [logs, setLogs] = useState<Array<{ id: string; message: string }>>([]);
  const logIdCounter = useRef(0);

  // State for different scenarios
  const [requiredValue, setRequiredValue] = useState('');
  const [optionalValue, setOptionalValue] = useState('');
  const [formRequiredValue, setFormRequiredValue] = useState('');
  const [formOptionalValue, setFormOptionalValue] = useState('');
  const [noValidateRequiredValue, setNoValidateRequiredValue] = useState('');
  const [noValidateOptionalValue, setNoValidateOptionalValue] = useState('');

  // Refs for debugging
  const requiredRef = useRef<HTMLIxDateInputElement | null>(null);
  const optionalRef = useRef<HTMLIxDateInputElement | null>(null);
  const formRequiredRef = useRef<HTMLIxDateInputElement | null>(null);
  const formOptionalRef = useRef<HTMLIxDateInputElement | null>(null);
  const noValidateRequiredRef = useRef<HTMLIxDateInputElement | null>(null);
  const noValidateOptionalRef = useRef<HTMLIxDateInputElement | null>(null);

  const addLog = (message: string) => {
    logIdCounter.current += 1;
    const uniqueId = `${Date.now()}-${logIdCounter.current}`;
    setLogs(prev => [...prev, { id: uniqueId, message: `[${new Date().toLocaleTimeString()}] ${message}` }]);
  };

  const debugValidationState = async (inputRef: React.RefObject<HTMLIxDateInputElement | null>, label: string) => {
    if (!inputRef.current) {
      addLog(`${label} - Element not available`);
      return;
    }

    const element = inputRef.current;
    const classList = Array.from(element.classList);
    const hasRequiredClass = classList.includes('ix-invalid--required');
    const required = element.required;
    const value = element.value;

    let touched = 'unknown';
    try {
      const isTouchedMethod = (element as any).isTouched;
      if (typeof isTouchedMethod === 'function') {
        touched = String(await isTouchedMethod.call(element));
      }
    } catch {
      touched = 'error';
    }

    addLog(`${label} - Req:${required}, Val:"${value}", Touch:${touched}, RedClass:${hasRequiredClass}`);
  };

  const triggerNativeBlur = async (elementRef: React.RefObject<HTMLIxDateInputElement | null>) => {
    if (!elementRef.current) return;
    try {
      const nativeInput = await elementRef.current.getNativeInputElement();
      if (nativeInput) {
        nativeInput.dispatchEvent(new FocusEvent('blur', { bubbles: true }));
        addLog('✅ Native blur triggered');
      }
    } catch (error) {
      addLog(`❌ Error: ${error}`);
    }
  };

  const clearLogs = () => setLogs([]);

  const buttonStyle = { padding: '0.4rem 0.8rem', fontSize: '0.85rem', border: 'none', borderRadius: '4px', cursor: 'pointer' };

  return (
    <div style={{ padding: '1rem', fontSize: '0.9rem' }}>
      <h2 style={{ marginBottom: '0.5rem' }}>Date Input Validation Tests</h2>
      <div style={{ marginBottom: '1rem', padding: '0.75rem', borderRadius: '4px' }}>
        <strong>Testing:</strong> Required field validation (red border) after blur. Format: YYYY/MM/DD
      </div>

      <button onClick={clearLogs} style={{ ...buttonStyle, color: 'white', marginBottom: '1rem' }}>
        🧹 Clear Log
      </button>

      {/* Grid Layout for Examples */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1rem' }}>

      {/* 1. Required Standalone */}
      <div style={{ border: '1px solid #f44336', padding: '1rem', borderRadius: '4px' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', color: '#c62828' }}>1️⃣ Required (Standalone)</h4>
        <IxDateInput
          ref={requiredRef}
          name="req1"
          label="Required Date"
          required
          value={requiredValue}
          onValueChange={(e) => { setRequiredValue(e.detail ?? ''); addLog(`1️⃣ Value: "${e.detail ?? 'empty'}"`); }}
          onFocus={() => { addLog('1️⃣ Focus'); setTimeout(() => debugValidationState(requiredRef, '1️⃣ FOCUS'), 10); }}
          onBlur={() => { addLog('1️⃣ Blur'); setTimeout(() => debugValidationState(requiredRef, '1️⃣ BLUR'), 100); }}
        />
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
          <button onClick={() => setRequiredValue('')} style={{ ...buttonStyle, backgroundColor: '#757575', color: 'white' }}>Empty</button>
          <button onClick={() => setRequiredValue('2024/12/25')} style={{ ...buttonStyle, backgroundColor: '#4caf50', color: 'white' }}>Valid</button>
          <button onClick={() => setRequiredValue('invalid')} style={{ ...buttonStyle, backgroundColor: '#ff9800', color: 'white' }}>Invalid</button>
          <button onClick={async () => { await triggerNativeBlur(requiredRef); setTimeout(() => debugValidationState(requiredRef, '1️⃣ MANUAL'), 100); }} style={{ ...buttonStyle, backgroundColor: '#ff5722', color: 'white' }}>Manual Blur</button>
          <button onClick={async () => { if (requiredRef.current) { await (requiredRef.current as any).clear?.(); setRequiredValue(''); addLog('1️⃣ Cleared'); } }} style={{ ...buttonStyle, backgroundColor: '#9c27b0', color: 'white' }}>Clear()</button>
        </div>
      </div>

      {/* 2. Optional Standalone */}
      <div style={{ border: '1px solid #4caf50', padding: '1rem', borderRadius: '4px' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', color: '#2e7d32' }}>2️⃣ Optional (Standalone)</h4>
        <IxDateInput
          ref={optionalRef}
          name="opt1"
          label="Optional Date"
          value={optionalValue}
          onValueChange={(e) => { setOptionalValue(e.detail ?? ''); addLog(`2️⃣ Value: "${e.detail ?? 'empty'}"`); }}
          onFocus={() => { addLog('2️⃣ Focus'); setTimeout(() => debugValidationState(optionalRef, '2️⃣ FOCUS'), 10); }}
          onBlur={() => { addLog('2️⃣ Blur'); setTimeout(() => debugValidationState(optionalRef, '2️⃣ BLUR'), 100); }}
        />
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
          <button onClick={() => setOptionalValue('')} style={{ ...buttonStyle, color: 'white' }}>Empty</button>
          <button onClick={() => setOptionalValue('2024/12/25')} style={{ ...buttonStyle, backgroundColor: '#4caf50', color: 'white' }}>Valid</button>
          <button onClick={() => setOptionalValue('invalid')} style={{ ...buttonStyle, backgroundColor: '#ff9800', color: 'white' }}>Invalid</button>
          <button onClick={async () => { await triggerNativeBlur(optionalRef); setTimeout(() => debugValidationState(optionalRef, '2️⃣ MANUAL'), 100); }} style={{ ...buttonStyle, backgroundColor: '#ff5722', color: 'white' }}>Manual Blur</button>
          <button onClick={async () => { if (optionalRef.current) { await (optionalRef.current as any).clear?.(); setOptionalValue(''); addLog('2️⃣ Cleared'); } }} style={{ ...buttonStyle, backgroundColor: '#9c27b0', color: 'white' }}>Clear()</button>
        </div>
      </div>

      {/* 3. Form Required */}
      <div style={{ border: '1px solid #2196F3', padding: '1rem', borderRadius: '4px' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', color: '#1565c0' }}>3️⃣ Required (In Form)</h4>
        <form onSubmit={(e) => { e.preventDefault(); addLog('3️⃣ Form submitted'); }}>
          <IxDateInput
            ref={formRequiredRef}
            name="formReq"
            label="Required Date"
            required
            value={formRequiredValue}
            onValueChange={(e) => { setFormRequiredValue(e.detail ?? ''); addLog(`3️⃣ Value: "${e.detail ?? 'empty'}"`); }}
            onFocus={() => { addLog('3️⃣ Focus'); setTimeout(() => debugValidationState(formRequiredRef, '3️⃣ FOCUS'), 10); }}
            onBlur={() => { addLog('3️⃣ Blur'); setTimeout(() => debugValidationState(formRequiredRef, '3️⃣ BLUR'), 100); }}
          />
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <button type="submit" style={{ ...buttonStyle, backgroundColor: '#2196F3', color: 'white' }}>Submit</button>
            <button type="button" onClick={() => setFormRequiredValue('')} style={{ ...buttonStyle, backgroundColor: '#757575', color: 'white' }}>Empty</button>
            <button type="button" onClick={() => setFormRequiredValue('2024/12/25')} style={{ ...buttonStyle, backgroundColor: '#4caf50', color: 'white' }}>Valid</button>
            <button type="button" onClick={() => setFormRequiredValue('invalid')} style={{ ...buttonStyle, backgroundColor: '#ff9800', color: 'white' }}>Invalid</button>
            <button type="button" onClick={async () => { await triggerNativeBlur(formRequiredRef); setTimeout(() => debugValidationState(formRequiredRef, '3️⃣ MANUAL'), 100); }} style={{ ...buttonStyle, backgroundColor: '#ff5722', color: 'white' }}>Manual Blur</button>
            <button type="button" onClick={async () => { if (formRequiredRef.current) { await (formRequiredRef.current as any).clear?.(); setFormRequiredValue(''); addLog('3️⃣ Cleared'); } }} style={{ ...buttonStyle, backgroundColor: '#9c27b0', color: 'white' }}>Clear()</button>
          </div>
        </form>
      </div>

      {/* 4. Form Optional */}
      <div style={{ border: '1px solid #009688', padding: '1rem', borderRadius: '4px' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', color: '#00695c' }}>4️⃣ Optional (In Form)</h4>
        <form onSubmit={(e) => { e.preventDefault(); addLog('4️⃣ Form submitted'); }}>
          <IxDateInput
            ref={formOptionalRef}
            name="formOpt"
            label="Optional Date"
            value={formOptionalValue}
            onValueChange={(e) => { setFormOptionalValue(e.detail ?? ''); addLog(`4️⃣ Value: "${e.detail ?? 'empty'}"`); }}
            onFocus={() => { addLog('4️⃣ Focus'); setTimeout(() => debugValidationState(formOptionalRef, '4️⃣ FOCUS'), 10); }}
            onBlur={() => { addLog('4️⃣ Blur'); setTimeout(() => debugValidationState(formOptionalRef, '4️⃣ BLUR'), 100); }}
          />
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <button type="submit" style={{ ...buttonStyle, backgroundColor: '#2196F3', color: 'white' }}>Submit</button>
            <button type="button" onClick={() => setFormOptionalValue('')} style={{ ...buttonStyle, backgroundColor: '#757575', color: 'white' }}>Empty</button>
            <button type="button" onClick={() => setFormOptionalValue('2024/12/25')} style={{ ...buttonStyle, backgroundColor: '#4caf50', color: 'white' }}>Valid</button>
            <button type="button" onClick={() => setFormOptionalValue('invalid')} style={{ ...buttonStyle, backgroundColor: '#ff9800', color: 'white' }}>Invalid</button>
            <button type="button" onClick={async () => { await triggerNativeBlur(formOptionalRef); setTimeout(() => debugValidationState(formOptionalRef, '4️⃣ MANUAL'), 100); }} style={{ ...buttonStyle, backgroundColor: '#ff5722', color: 'white' }}>Manual Blur</button>
            <button type="button" onClick={async () => { if (formOptionalRef.current) { await (formOptionalRef.current as any).clear?.(); setFormOptionalValue(''); addLog('4️⃣ Cleared'); } }} style={{ ...buttonStyle, backgroundColor: '#9c27b0', color: 'white' }}>Clear()</button>
          </div>
        </form>
      </div>

      {/* 5. NoValidate Required */}
      <div style={{ border: '1px solid #ff9800', padding: '1rem', borderRadius: '4px'}}>
        <h4 style={{ margin: '0 0 0.5rem 0', color: '#e65100' }}>5️⃣ Required (NoValidate Form)</h4>
        <form noValidate onSubmit={(e) => { e.preventDefault(); addLog('5️⃣ NoValidate form submitted'); }}>
          <IxDateInput
            ref={noValidateRequiredRef}
            name="noValReq"
            label="Required Date"
            required
            value={noValidateRequiredValue}
            onValueChange={(e) => { setNoValidateRequiredValue(e.detail ?? ''); addLog(`5️⃣ Value: "${e.detail ?? 'empty'}"`); }}
            onFocus={() => { addLog('5️⃣ Focus'); setTimeout(() => debugValidationState(noValidateRequiredRef, '5️⃣ FOCUS'), 10); }}
            onBlur={() => { addLog('5️⃣ Blur'); setTimeout(() => debugValidationState(noValidateRequiredRef, '5️⃣ BLUR'), 100); }}
          />
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <button type="submit" style={{ ...buttonStyle, backgroundColor: '#2196F3', color: 'white' }}>Submit</button>
            <button type="button" onClick={() => setNoValidateRequiredValue('')} style={{ ...buttonStyle, backgroundColor: '#757575', color: 'white' }}>Empty</button>
            <button type="button" onClick={() => setNoValidateRequiredValue('2024/12/25')} style={{ ...buttonStyle, backgroundColor: '#4caf50', color: 'white' }}>Valid</button>
            <button type="button" onClick={() => setNoValidateRequiredValue('invalid')} style={{ ...buttonStyle, backgroundColor: '#ff9800', color: 'white' }}>Invalid</button>
            <button type="button" onClick={async () => { await triggerNativeBlur(noValidateRequiredRef); setTimeout(() => debugValidationState(noValidateRequiredRef, '5️⃣ MANUAL'), 100); }} style={{ ...buttonStyle, backgroundColor: '#ff5722', color: 'white' }}>Manual Blur</button>
            <button type="button" onClick={async () => { if (noValidateRequiredRef.current) { await (noValidateRequiredRef.current as any).clear?.(); setNoValidateRequiredValue(''); addLog('5️⃣ Cleared'); } }} style={{ ...buttonStyle, backgroundColor: '#9c27b0', color: 'white' }}>Clear()</button>
          </div>
        </form>
      </div>

      {/* 6. NoValidate Optional */}
      <div style={{ border: '1px solid #9c27b0', padding: '1rem', borderRadius: '4px' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', color: '#6a1b9a' }}>6️⃣ Optional (NoValidate Form)</h4>
        <form noValidate onSubmit={(e) => { e.preventDefault(); addLog('6️⃣ NoValidate form submitted'); }}>
          <IxDateInput
            ref={noValidateOptionalRef}
            name="noValOpt"
            label="Optional Date"
            value={noValidateOptionalValue}
            onValueChange={(e) => { setNoValidateOptionalValue(e.detail ?? ''); addLog(`6️⃣ Value: "${e.detail ?? 'empty'}"`); }}
            onFocus={() => { addLog('6️⃣ Focus'); setTimeout(() => debugValidationState(noValidateOptionalRef, '6️⃣ FOCUS'), 10); }}
            onBlur={() => { addLog('6️⃣ Blur'); setTimeout(() => debugValidationState(noValidateOptionalRef, '6️⃣ BLUR'), 100); }}
          />
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <button type="submit" style={{ ...buttonStyle, backgroundColor: '#2196F3', color: 'white' }}>Submit</button>
            <button type="button" onClick={() => setNoValidateOptionalValue('')} style={{ ...buttonStyle, backgroundColor: '#757575', color: 'white' }}>Empty</button>
            <button type="button" onClick={() => setNoValidateOptionalValue('2024/12/25')} style={{ ...buttonStyle, backgroundColor: '#4caf50', color: 'white' }}>Valid</button>
            <button type="button" onClick={() => setNoValidateOptionalValue('invalid')} style={{ ...buttonStyle, backgroundColor: '#ff9800', color: 'white' }}>Invalid</button>
            <button type="button" onClick={async () => { await triggerNativeBlur(noValidateOptionalRef); setTimeout(() => debugValidationState(noValidateOptionalRef, '6️⃣ MANUAL'), 100); }} style={{ ...buttonStyle, backgroundColor: '#ff5722', color: 'white' }}>Manual Blur</button>
            <button type="button" onClick={async () => { if (noValidateOptionalRef.current) { await (noValidateOptionalRef.current as any).clear?.(); setNoValidateOptionalValue(''); addLog('6️⃣ Cleared'); } }} style={{ ...buttonStyle, backgroundColor: '#9c27b0', color: 'white' }}>Clear()</button>
          </div>
        </form>
      </div>

      </div> {/* End of grid */}

      {/* Event Log */}
      <div style={{ marginTop: '1rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>🪵 Event Log</h3>
        <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '0.75rem', maxHeight: '300px', overflowY: 'auto', fontFamily: 'monospace', fontSize: '0.8rem' }}>
          {logs.length === 0 ? (
            <div style={{ color: '#666', fontStyle: 'italic' }}>No events yet... Interact with fields above</div>
          ) : (
            logs.map((log) => {
              const isError = log.message.includes('❌');
              const isDebug = log.message.includes('BLUR') || log.message.includes('FOCUS') || log.message.includes('MANUAL');
              let logColor = 'inherit';
              if (isError) {
                logColor = '#d32f2f';
              } else if (isDebug) {
                logColor = '#1976d2';
              }

              return (
                <div key={log.id} style={{
                  marginBottom: '1px',
                  padding: '1px 0',
                  color: logColor
                }}>
                  {log.message}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
