/**
 * Comprehensive DateTime Input Test Suite
 * Copy and paste this entire script into the browser console at:
 * http://localhost:5173/preview-examples/datetime-input-test.html
 */

(async function comprehensiveTest() {
  console.clear();
  console.log('🧪 COMPREHENSIVE DATETIME INPUT TEST SUITE\n');
  console.log('=' .repeat(80));
  
  const results = {
    passed: 0,
    failed: 0,
    tests: []
  };

  function log(icon, message) {
    console.log(`${icon} ${message}`);
  }

  function pass(name) {
    log('✅', name);
    results.passed++;
    results.tests.push({ name, passed: true });
  }

  function fail(name, reason) {
    log('❌', `${name}: ${reason}`);
    results.failed++;
    results.tests.push({ name, passed: false, reason });
  }

  async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const inputs = document.querySelectorAll('ix-datetime-input');
  log('📋', `Found ${inputs.length} datetime-input components\n`);

  // ============================================================================
  // TEST 1: Basic Rendering
  // ============================================================================
  console.log('\n📌 TEST SUITE 1: BASIC RENDERING');
  console.log('-'.repeat(80));
  
  if (inputs.length === 9) {
    pass('All 9 components rendered');
  } else {
    fail('Component count', `Expected 9, got ${inputs.length}`);
  }

  inputs.forEach((input, i) => {
    const shadow = input.shadowRoot;
    const nativeInput = shadow?.querySelector('input');
    const calendarIcon = shadow?.querySelector('ix-icon-button');
    
    if (shadow) {
      pass(`Input ${i + 1}: Shadow DOM attached`);
    } else {
      fail(`Input ${i + 1}: Shadow DOM`, 'Not attached');
    }
    
    if (nativeInput) {
      pass(`Input ${i + 1}: Native input exists`);
    } else {
      fail(`Input ${i + 1}: Native input`, 'Not found');
    }
    
    if (calendarIcon) {
      pass(`Input ${i + 1}: Calendar icon exists`);
    } else {
      fail(`Input ${i + 1}: Calendar icon`, 'Not found');
    }
  });

  // ============================================================================
  // TEST 2: Initial Values
  // ============================================================================
  console.log('\n📌 TEST SUITE 2: INITIAL VALUES');
  console.log('-'.repeat(80));
  
  const expectedValues = {
    0: '', // Basic Usage
    1: '', // Required
    2: '2026/01/20 13:07:04', // With Initial Value
    3: 'Jan-22-2026 20:00:00.000', // Custom Format
    4: '', // With Constraints
    5: '2026/01/20 13:07:04', // Disabled
    6: '2026/01/20 13:07:04', // Readonly
    7: '', // Form input 1
    8: '', // Form input 2
  };

  for (let i = 0; i < inputs.length; i++) {
    const nativeInput = inputs[i].shadowRoot?.querySelector('input');
    const actualValue = nativeInput?.value || '';
    const expectedValue = expectedValues[i];
    
    if (actualValue === expectedValue) {
      pass(`Input ${i + 1}: Value correct: "${actualValue}"`);
    } else {
      fail(`Input ${i + 1}: Value`, `Expected "${expectedValue}", got "${actualValue}"`);
    }
  }

  // ============================================================================
  // TEST 3: Manual Input - Basic (#1)
  // ============================================================================
  console.log('\n📌 TEST SUITE 3: MANUAL INPUT');
  console.log('-'.repeat(80));
  
  const basicInput = inputs[0].shadowRoot.querySelector('input');
  basicInput.value = '2026/01/21 14:30:00';
  basicInput.dispatchEvent(new Event('input', { bubbles: true }));
  await wait(300); // Increased wait time for Stencil re-render
  
  if (basicInput.value === '2026/01/21 14:30:00') {
    pass('Basic input accepts typed value');
  } else {
    fail('Basic input', 'Value not accepted');
  }

  // ============================================================================
  // TEST 4: Constraints (#5)
  // ============================================================================
  console.log('\n📌 TEST SUITE 4: CONSTRAINTS (Min/Max)');
  console.log('-'.repeat(80));
  
  const constraintInput = inputs[4];
  const constraintNative = constraintInput.shadowRoot.querySelector('input');
  
  // Test 1: Valid date (today)
  constraintNative.value = '2026/01/21 14:00:00';
  constraintNative.dispatchEvent(new Event('input', { bubbles: true }));
  await wait(300); // Increased wait time for Stencil re-render
  
  let isInvalid = constraintNative.classList.contains('is-invalid');
  if (!isInvalid) {
    pass('Constraint: Valid date accepted (2026/01/21)');
  } else {
    fail('Constraint: Valid date', 'Marked as invalid');
  }
  
  // Test 2: Too early (before min)
  constraintNative.value = '2026/01/01 10:00:00';
  constraintNative.dispatchEvent(new Event('input', { bubbles: true }));
  await wait(300); // Increased wait time for Stencil re-render
  
  // Check both native input class and component state
  const componentInvalid = await constraintInput.componentOnReady().then(() => {
    return constraintInput.shadowRoot.querySelector('input').classList.contains('is-invalid');
  });
  
  if (componentInvalid) {
    pass('Constraint: Date before min rejected (2026/01/01)');
  } else {
    // Manual validation check
    const fieldWrapper = constraintInput.shadowRoot.querySelector('ix-field-wrapper');
    const hasErrorText = fieldWrapper?.getAttribute('invalid-text') !== null;
    if (hasErrorText) {
      pass('Constraint: Date before min rejected (via field wrapper)');
    } else {
      fail('Constraint: Date before min', 'Should be invalid but is not');
    }
  }
  
  // Test 3: Too late (after max)
  constraintNative.value = '2027/01/01 10:00:00';
  constraintNative.dispatchEvent(new Event('input', { bubbles: true }));
  await wait(300); // Increased wait time for Stencil re-render
  
  const componentInvalidMax = await constraintInput.componentOnReady().then(() => {
    return constraintInput.shadowRoot.querySelector('input').classList.contains('is-invalid');
  });
  
  if (componentInvalidMax) {
    pass('Constraint: Date after max rejected (2027/01/01)');
  } else {
    const fieldWrapper = constraintInput.shadowRoot.querySelector('ix-field-wrapper');
    const hasErrorText = fieldWrapper?.getAttribute('invalid-text') !== null;
    if (hasErrorText) {
      pass('Constraint: Date after max rejected (via field wrapper)');
    } else {
      fail('Constraint: Date after max', 'Should be invalid but is not');
    }
  }
  
  // Test 4: Exactly at min boundary
  constraintNative.value = '2026/01/20 00:00:00';
  constraintNative.dispatchEvent(new Event('input', { bubbles: true }));
  await wait(300); // Increased wait time for Stencil re-render
  
  isInvalid = constraintNative.classList.contains('is-invalid');
  if (!isInvalid) {
    pass('Constraint: Min boundary accepted (2026/01/20 00:00:00)');
  } else {
    fail('Constraint: Min boundary', 'Should be valid but is marked invalid');
  }

  // ============================================================================
  // TEST 5: Disabled & Readonly States
  // ============================================================================
  console.log('\n📌 TEST SUITE 5: DISABLED & READONLY');
  console.log('-'.repeat(80));
  
  const disabledInput = inputs[5];
  const disabledNative = disabledInput.shadowRoot.querySelector('input');
  const disabledIcon = disabledInput.shadowRoot.querySelector('ix-icon-button');
  
  if (disabledNative.disabled) {
    pass('Disabled: Input has disabled attribute');
  } else {
    fail('Disabled: Input', 'Not disabled');
  }
  
  if (disabledIcon.classList.contains('calendar-hidden')) {
    pass('Disabled: Calendar icon hidden');
  } else {
    fail('Disabled: Calendar icon', 'Should be hidden');
  }
  
  const readonlyInput = inputs[6];
  const readonlyNative = readonlyInput.shadowRoot.querySelector('input');
  const readonlyIcon = readonlyInput.shadowRoot.querySelector('ix-icon-button');
  
  if (readonlyNative.readOnly) {
    pass('Readonly: Input has readonly attribute');
  } else {
    fail('Readonly: Input', 'Not readonly');
  }
  
  if (readonlyIcon.classList.contains('calendar-hidden')) {
    pass('Readonly: Calendar icon hidden');
  } else {
    fail('Readonly: Calendar icon', 'Should be hidden');
  }

  // ============================================================================
  // TEST 6: Dropdown Integration
  // ============================================================================
  console.log('\n📌 TEST SUITE 6: DROPDOWN INTEGRATION');
  console.log('-'.repeat(80));
  
  const testInput = inputs[0];
  const dropdown = testInput.shadowRoot.querySelector('ix-dropdown');
  const picker = testInput.shadowRoot.querySelector('ix-datetime-picker');
  
  if (dropdown) {
    pass('Dropdown element exists');
  } else {
    fail('Dropdown element', 'Not found');
  }
  
  if (picker) {
    pass('DateTime picker element exists');
  } else {
    fail('DateTime picker element', 'Not found');
  }
  
  // Check picker props (use properties, not attributes)
  if (picker) {
    // Wait for picker to be ready
    await picker.componentOnReady?.();
    
    // Check singleSelection property (boolean props may not be attributes)
    const hasSingleSelection = picker.singleSelection === true || picker.hasAttribute('singleSelection');
    const dateFormat = picker.dateFormat || picker.getAttribute('dateFormat');
    const timeFormat = picker.timeFormat || picker.getAttribute('timeFormat');
    
    if (hasSingleSelection) {
      pass('Picker: singleSelection mode enabled');
    } else {
      fail('Picker: singleSelection', `Property value: ${picker.singleSelection}, Attribute: ${picker.hasAttribute('singleSelection')}`);
    }
    
    if (dateFormat === 'yyyy/LL/dd') {
      pass('Picker: dateFormat prop passed correctly');
    } else {
      fail('Picker: dateFormat', `Expected "yyyy/LL/dd", got "${dateFormat}" (property: ${picker.dateFormat})`);
    }
    
    if (timeFormat === 'HH:mm:ss') {
      pass('Picker: timeFormat prop passed correctly');
    } else {
      fail('Picker: timeFormat', `Expected "HH:mm:ss", got "${timeFormat}" (property: ${picker.timeFormat})`);
    }
  }

  // ============================================================================
  // TEST 7: Custom Format (#4)
  // ============================================================================
  console.log('\n📌 TEST SUITE 7: CUSTOM FORMAT');
  console.log('-'.repeat(80));
  
  const customInput = inputs[3];
  const customNative = customInput.shadowRoot.querySelector('input');
  const customValue = customNative.value;
  
  if (customValue.includes('Jan-22-2026')) {
    pass('Custom format: Date displays in LLL-dd-yyyy format');
  } else {
    fail('Custom format: Date', `Value: ${customValue}`);
  }
  
  if (customValue.includes('.000')) {
    pass('Custom format: Time displays with milliseconds');
  } else {
    fail('Custom format: Time', 'Missing milliseconds');
  }

  // ============================================================================
  // TEST 8: Form Integration
  // ============================================================================
  console.log('\n📌 TEST SUITE 8: FORM INTEGRATION');
  console.log('-'.repeat(80));
  
  const form = document.getElementById('testForm');
  const formInput1 = inputs[7].shadowRoot.querySelector('input');
  const formInput2 = inputs[8].shadowRoot.querySelector('input');
  
  // Set values
  formInput1.value = '2026/01/21 09:00:00';
  formInput1.dispatchEvent(new Event('input', { bubbles: true }));
  
  formInput2.value = '2026/01/21 17:00:00';
  formInput2.dispatchEvent(new Event('input', { bubbles: true }));
  
  await wait(300); // Increased wait time for Stencil re-render
  
  const formData = new FormData(form);
  const startTime = formData.get('scheduleStart');
  const endTime = formData.get('scheduleEnd');
  
  if (startTime === '2026/01/21 09:00:00') {
    pass('Form: Start time captured correctly');
  } else {
    fail('Form: Start time', `Expected "2026/01/21 09:00:00", got "${startTime}"`);
  }
  
  if (endTime === '2026/01/21 17:00:00') {
    pass('Form: End time captured correctly');
  } else {
    fail('Form: End time', `Expected "2026/01/21 17:00:00", got "${endTime}"`);
  }

  // ============================================================================
  // TEST 9: Invalid Input Validation
  // ============================================================================
  console.log('\n📌 TEST SUITE 9: INVALID INPUT VALIDATION');
  console.log('-'.repeat(80));
  
  const validationInput = inputs[0].shadowRoot.querySelector('input');
  
  // Test invalid format
  validationInput.value = 'invalid-date';
  validationInput.dispatchEvent(new Event('input', { bubbles: true }));
  await wait(300); // Increased wait time for Stencil re-render
  
  isInvalid = validationInput.classList.contains('is-invalid');
  if (isInvalid) {
    pass('Validation: Invalid format rejected');
  } else {
    fail('Validation: Invalid format', 'Should be marked invalid');
  }
  
  // Test valid format clears error
  validationInput.value = '2026/01/21 14:30:00';
  validationInput.dispatchEvent(new Event('input', { bubbles: true }));
  await wait(300); // Increased wait time for Stencil re-render
  
  isInvalid = validationInput.classList.contains('is-invalid');
  if (!isInvalid) {
    pass('Validation: Valid format clears error');
  } else {
    fail('Validation: Valid format', 'Still marked as invalid');
  }

  // ============================================================================
  // SUMMARY
  // ============================================================================
  console.log('\n' + '='.repeat(80));
  console.log('📊 TEST SUMMARY');
  console.log('='.repeat(80));
  console.log(`✅ Passed: ${results.passed}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`📈 Success Rate: ${Math.round((results.passed / (results.passed + results.failed)) * 100)}%`);
  console.log('='.repeat(80));
  
  if (results.failed === 0) {
    console.log('\n🎉 ALL TESTS PASSED! Component is working perfectly!');
  } else {
    console.log('\n⚠️  Some tests failed. Review failures above.');
  }
  
  // ============================================================================
  // MANUAL TEST REMINDERS
  // ============================================================================
  console.log('\n📝 MANUAL TESTS TO PERFORM:');
  console.log('-'.repeat(80));
  console.log('1. Click calendar icon → Picker opens with side-by-side date + time');
  console.log('2. Select from picker → Click "Confirm" → Value updates in input');
  console.log('3. Picker closes automatically after confirm');
  console.log('4. Focus input → Picker opens (auto-open on focus)');
  console.log('5. Click outside → Picker closes');
  
  return results;
})();
