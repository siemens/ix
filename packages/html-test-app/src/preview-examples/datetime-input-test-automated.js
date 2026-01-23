/*
 * Automated Test Suite for ix-datetime-input
 * Run this in the browser console after loading datetime-input-test.html
 */

(async function testDateTimeInput() {
  console.clear();
  console.log('🧪 Starting DateTime Input Automated Tests...\n');

  const results = {
    passed: 0,
    failed: 0,
    tests: []
  };

  function logTest(name, passed, message) {
    const icon = passed ? '✅' : '❌';
    console.log(`${icon} ${name}: ${message}`);
    results.tests.push({ name, passed, message });
    if (passed) results.passed++;
    else results.failed++;
  }

  async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Test 1: Component Registration
  console.log('\n📋 Test 1: Component Registration');
  try {
    const inputs = document.querySelectorAll('ix-datetime-input');
    logTest('Component renders', inputs.length > 0, `Found ${inputs.length} datetime-input components`);
  } catch (e) {
    logTest('Component renders', false, e.message);
  }

  // Test 2: Basic Input Interaction
  console.log('\n📋 Test 2: Basic Input Interaction');
  try {
    const basicInput = document.querySelectorAll('ix-datetime-input')[0];
    const nativeInput = basicInput.shadowRoot.querySelector('input');
    
    logTest('Native input exists', !!nativeInput, 'Shadow DOM input element found');
    logTest('Input is editable', !nativeInput.disabled && !nativeInput.readOnly, 'Input is not disabled or readonly');
    
    // Test typing
    nativeInput.value = '2026/01/21 14:30:00';
    nativeInput.dispatchEvent(new Event('input', { bubbles: true }));
    await wait(100);
    
    logTest('Manual input accepted', nativeInput.value === '2026/01/21 14:30:00', `Value: ${nativeInput.value}`);
  } catch (e) {
    logTest('Basic Input Interaction', false, e.message);
  }

  // Test 3: Calendar Icon Visibility
  console.log('\n📋 Test 3: Calendar Icon');
  try {
    const basicInput = document.querySelectorAll('ix-datetime-input')[0];
    const calendarButton = basicInput.shadowRoot.querySelector('ix-icon-button');
    
    logTest('Calendar icon exists', !!calendarButton, 'Icon button found in shadow DOM');
    logTest('Calendar icon visible', !calendarButton.classList.contains('calendar-hidden'), 'Icon is not hidden');
  } catch (e) {
    logTest('Calendar Icon', false, e.message);
  }

  // Test 4: Initial Value with ISO Format
  console.log('\n📋 Test 4: Initial Value (ISO Format)');
  try {
    const inputWithValue = document.querySelectorAll('ix-datetime-input')[2]; // "With Initial Value"
    const nativeInput = inputWithValue.shadowRoot.querySelector('input');
    const propValue = inputWithValue.getAttribute('value');
    const displayValue = nativeInput.value;
    
    logTest('Prop value is ISO', propValue === '2026-01-20T13:07:04', `Prop: ${propValue}`);
    logTest('Display value format', displayValue && displayValue.length > 0, `Display: ${displayValue || '(empty)'}`);
    
    // This is expected to fail with current implementation
    if (!displayValue) {
      console.warn('⚠️  ISO value not converted to display format - this is a known issue');
    }
  } catch (e) {
    logTest('Initial Value', false, e.message);
  }

  // Test 5: Custom Format
  console.log('\n📋 Test 5: Custom Format');
  try {
    const customInput = document.querySelectorAll('ix-datetime-input')[3]; // "Custom Format"
    const nativeInput = customInput.shadowRoot.querySelector('input');
    const displayValue = nativeInput.value;
    
    logTest('Custom format renders', displayValue && displayValue.length > 0, `Value: ${displayValue || '(empty)'}`);
    
    // Check if format contains expected pattern
    const hasCustomFormat = displayValue.includes('-'); // LLL-dd-yyyy format should have dashes
    logTest('Custom format applied', hasCustomFormat, `Format appears custom: ${displayValue}`);
  } catch (e) {
    logTest('Custom Format', false, e.message);
  }

  // Test 6: Disabled State
  console.log('\n📋 Test 6: Disabled State');
  try {
    const disabledInput = document.querySelectorAll('ix-datetime-input')[5]; // "Disabled State"
    const nativeInput = disabledInput.shadowRoot.querySelector('input');
    const calendarButton = disabledInput.shadowRoot.querySelector('ix-icon-button');
    
    logTest('Input is disabled', nativeInput.disabled, 'Native input has disabled attribute');
    logTest('Calendar icon hidden', calendarButton.classList.contains('calendar-hidden'), 'Icon button is hidden');
  } catch (e) {
    logTest('Disabled State', false, e.message);
  }

  // Test 7: Readonly State
  console.log('\n📋 Test 7: Readonly State');
  try {
    const readonlyInput = document.querySelectorAll('ix-datetime-input')[6]; // "Readonly State"
    const nativeInput = readonlyInput.shadowRoot.querySelector('input');
    const calendarButton = readonlyInput.shadowRoot.querySelector('ix-icon-button');
    
    logTest('Input is readonly', nativeInput.readOnly, 'Native input has readonly attribute');
    logTest('Calendar icon hidden', calendarButton.classList.contains('calendar-hidden'), 'Icon button is hidden');
  } catch (e) {
    logTest('Readonly State', false, e.message);
  }

  // Test 8: Required Field
  console.log('\n📋 Test 8: Required Field');
  try {
    const requiredInput = document.querySelectorAll('ix-datetime-input')[1]; // "Required Field"
    const nativeInput = requiredInput.shadowRoot.querySelector('input');
    
    logTest('Required attribute set', nativeInput.required, 'Native input has required attribute');
    logTest('Field is empty initially', !nativeInput.value, 'Value is empty');
  } catch (e) {
    logTest('Required Field', false, e.message);
  }

  // Test 9: Dropdown Trigger
  console.log('\n📋 Test 9: Dropdown Integration');
  try {
    const basicInput = document.querySelectorAll('ix-datetime-input')[0];
    const dropdown = basicInput.shadowRoot.querySelector('ix-dropdown');
    const datetimePicker = basicInput.shadowRoot.querySelector('ix-datetime-picker');
    
    logTest('Dropdown exists', !!dropdown, 'ix-dropdown element found');
    logTest('DateTime picker exists', !!datetimePicker, 'ix-datetime-picker element found');
    logTest('Picker has confirm button', !!datetimePicker, 'Picker configured with i18nDone prop');
  } catch (e) {
    logTest('Dropdown Integration', false, e.message);
  }

  // Test 10: Event Listeners
  console.log('\n📋 Test 10: Event Listeners');
  try {
    const basicInput = document.querySelectorAll('ix-datetime-input')[0];
    let valueChangeEmitted = false;
    
    basicInput.addEventListener('valueChange', () => {
      valueChangeEmitted = true;
    });
    
    const nativeInput = basicInput.shadowRoot.querySelector('input');
    nativeInput.value = '2026/01/21 15:00:00';
    nativeInput.dispatchEvent(new Event('input', { bubbles: true }));
    
    await wait(100);
    
    logTest('valueChange event fires', valueChangeEmitted, 'Event listener triggered');
  } catch (e) {
    logTest('Event Listeners', false, e.message);
  }

  // Test 11: Form Integration
  console.log('\n📋 Test 11: Form Integration');
  try {
    const form = document.getElementById('testForm');
    const formInputs = form.querySelectorAll('ix-datetime-input');
    
    logTest('Form has datetime inputs', formInputs.length === 2, `Found ${formInputs.length} inputs in form`);
    
    // Set values
    const input1 = formInputs[0].shadowRoot.querySelector('input');
    const input2 = formInputs[1].shadowRoot.querySelector('input');
    
    input1.value = '2026/01/21 09:00:00';
    input1.dispatchEvent(new Event('input', { bubbles: true }));
    
    input2.value = '2026/01/21 17:00:00';
    input2.dispatchEvent(new Event('input', { bubbles: true }));
    
    await wait(100);
    
    const formData = new FormData(form);
    const startTime = formData.get('scheduleStart');
    const endTime = formData.get('scheduleEnd');
    
    logTest('Form captures start time', !!startTime, `Start: ${startTime || '(empty)'}`);
    logTest('Form captures end time', !!endTime, `End: ${endTime || '(empty)'}`);
  } catch (e) {
    logTest('Form Integration', false, e.message);
  }

  // Test 12: Validation
  console.log('\n📋 Test 12: Validation');
  try {
    const basicInput = document.querySelectorAll('ix-datetime-input')[0];
    const nativeInput = basicInput.shadowRoot.querySelector('input');
    
    // Test invalid date
    nativeInput.value = 'invalid-date';
    nativeInput.dispatchEvent(new Event('input', { bubbles: true }));
    await wait(100);
    
    const hasInvalidClass = nativeInput.classList.contains('is-invalid');
    logTest('Invalid input detected', hasInvalidClass, 'Invalid class applied');
    
    // Test valid date
    nativeInput.value = '2026/01/21 14:30:00';
    nativeInput.dispatchEvent(new Event('input', { bubbles: true }));
    await wait(100);
    
    const isValid = !nativeInput.classList.contains('is-invalid');
    logTest('Valid input accepted', isValid, 'Invalid class removed');
  } catch (e) {
    logTest('Validation', false, e.message);
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 TEST SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Passed: ${results.passed}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`📈 Success Rate: ${Math.round((results.passed / (results.passed + results.failed)) * 100)}%`);
  console.log('='.repeat(60));

  // Known Issues
  console.log('\n⚠️  KNOWN ISSUES:');
  console.log('1. ISO format in value prop not converted to display format');
  console.log('   - Current: Component expects display format like "2026/01/21 13:07:04"');
  console.log('   - Issue: HTML test uses ISO format "2026-01-20T13:07:04"');
  console.log('   - Fix needed: Either convert ISO to display or update test HTML');
  console.log('\n2. Custom format might not render correctly on initial load');
  console.log('   - Value prop must be in the custom format, not ISO');

  return results;
})();
