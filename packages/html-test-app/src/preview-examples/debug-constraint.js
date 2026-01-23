/**
 * Debug script for constraint validation
 * Run this in console at: http://localhost:5173/preview-examples/datetime-input-test.html
 */

(async function debugConstraintValidation() {
  console.clear();
  console.log('🔍 DEBUGGING CONSTRAINT VALIDATION\n');
  console.log('='.repeat(80));
  
  const constraintInput = document.querySelectorAll('ix-datetime-input')[4]; // Input #5
  const nativeInput = constraintInput.shadowRoot.querySelector('input');
  const fieldWrapper = constraintInput.shadowRoot.querySelector('ix-field-wrapper');
  
  console.log('📋 Initial State:');
  console.log('  min-date:', constraintInput.getAttribute('min-date'));
  console.log('  max-date:', constraintInput.getAttribute('max-date'));
  console.log('  current value:', nativeInput.value);
  console.log('  input has is-invalid class:', nativeInput.classList.contains('is-invalid'));
  console.log('  field-wrapper isInvalid:', fieldWrapper.hasAttribute('is-invalid'));
  console.log('');
  
  async function testValue(testValue, description) {
    console.log(`\n🧪 TEST: ${description}`);
    console.log(`  Setting value to: "${testValue}"`);
    
    // Set the value
    nativeInput.value = testValue;
    nativeInput.dispatchEvent(new Event('input', { bubbles: true }));
    
    // Wait for Stencil to process
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Check component internal state
    console.log('  Component value prop:', constraintInput.value);
    
    // Try to access internal state (this might not work due to private members)
    try {
      await constraintInput.componentOnReady();
      console.log('  Component is ready');
    } catch (e) {
      console.log('  Component ready check failed:', e.message);
    }
    
    // Check CSS classes
    const hasInvalidClass = nativeInput.classList.contains('is-invalid');
    console.log('  input.is-invalid class:', hasInvalidClass);
    
    // Check field wrapper
    const wrapperInvalid = fieldWrapper.hasAttribute('is-invalid');
    const wrapperInvalidText = fieldWrapper.getAttribute('invalid-text');
    console.log('  field-wrapper is-invalid attr:', wrapperInvalid);
    console.log('  field-wrapper invalid-text:', wrapperInvalidText);
    
    // Check validation event
    let validityEvent = null;
    const validityHandler = (e) => {
      validityEvent = e.detail;
      console.log('  ✉️  validityStateChange event:', e.detail);
    };
    constraintInput.addEventListener('validityStateChange', validityHandler);
    
    // Trigger input again to see if event fires
    nativeInput.dispatchEvent(new Event('input', { bubbles: true }));
    await new Promise(resolve => setTimeout(resolve, 100));
    
    constraintInput.removeEventListener('validityStateChange', validityHandler);
    
    // Visual check
    const inputStyles = window.getComputedStyle(nativeInput);
    console.log('  computed border-color:', inputStyles.borderColor);
    
    return {
      hasInvalidClass,
      wrapperInvalid,
      wrapperInvalidText,
      validityEvent
    };
  }
  
  // Test 1: Valid date
  await testValue('2026/01/21 14:00:00', 'Valid date (within range)');
  
  // Test 2: Before min
  await testValue('2026/01/01 10:00:00', 'BEFORE MIN (should be invalid)');
  
  // Test 3: After max
  await testValue('2027/01/01 10:00:00', 'AFTER MAX (should be invalid)');
  
  // Test 4: At min boundary
  await testValue('2026/01/20 00:00:00', 'AT MIN BOUNDARY (should be valid)');
  
  console.log('\n' + '='.repeat(80));
  console.log('🔍 COMPONENT INTERNALS (if accessible):');
  console.log('  Component properties:', Object.keys(constraintInput));
  console.log('  Try reading minDate:', constraintInput.minDate);
  console.log('  Try reading maxDate:', constraintInput.maxDate);
  console.log('='.repeat(80));
  
})();
