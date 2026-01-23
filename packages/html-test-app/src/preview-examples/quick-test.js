// Quick DateTime Input Test - Copy and paste into browser console

console.clear();
console.log('🧪 Quick DateTime Input Test\n');

const inputs = document.querySelectorAll('ix-datetime-input');
console.log(`Found ${inputs.length} datetime-input components\n`);

inputs.forEach((input, i) => {
  const label = input.getAttribute('label') || `Input ${i + 1}`;
  const nativeInput = input.shadowRoot?.querySelector('input');
  const value = nativeInput?.value || '(empty)';
  const disabled = input.hasAttribute('disabled');
  const readonly = input.hasAttribute('readonly');
  const required = input.hasAttribute('required');
  
  console.log(`${i + 1}. ${label}`);
  console.log(`   Value: ${value}`);
  console.log(`   States: ${disabled ? 'DISABLED' : ''} ${readonly ? 'READONLY' : ''} ${required ? 'REQUIRED' : ''}`);
  console.log('');
});

// Test typing in first input
console.log('Testing manual input...');
const firstInput = inputs[0]?.shadowRoot?.querySelector('input');
if (firstInput) {
  firstInput.value = '2026/01/21 14:30:00';
  firstInput.dispatchEvent(new Event('input', { bubbles: true }));
  console.log('✅ Typed: 2026/01/21 14:30:00');
} else {
  console.log('❌ Could not find input element');
}

console.log('\n✅ Test complete! Check the components in the page.');
