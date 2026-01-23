# DateTime Input - Manual Testing Checklist

**Test Page:** http://localhost:5173/preview-examples/datetime-input-test.html

**Date:** 2026-01-21

**Tester:** _______________

---

## 🎯 **Testing Instructions**

For each test:
1. Follow the steps exactly as written
2. Check the **Expected Result**
3. Mark **✅ PASS** or **❌ FAIL**
4. If FAIL, write notes in the "Notes" section

---

## 📋 **Test Suite 1: Picker Interaction**

### **Test 1.1: Calendar Icon Opens Picker**
**Component:** Input #1 (Basic Usage)

**Steps:**
1. Scroll to "Basic Usage" section
2. Click the **calendar icon** (right side of input)

**Expected Result:**
- ✅ Dropdown opens immediately
- ✅ Date picker visible on LEFT side
- ✅ Time picker visible on RIGHT side (side-by-side layout)
- ✅ "Confirm" button visible at bottom

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 1.2: Select Date and Time from Picker**
**Component:** Input #1 (Basic Usage)

**Pre-condition:** Picker is open from Test 1.1

**Steps:**
1. Click a **date** in the calendar (e.g., tomorrow's date)
2. Observe the date selection highlights
3. Scroll in the **time picker** and select a time (e.g., 15:30:00)
4. Click the **"Confirm"** button

**Expected Result:**
- ✅ Selected date highlights in blue/primary color
- ✅ Selected time is visible in the time picker
- ✅ After clicking "Confirm":
  - Input field updates with selected date and time
  - Format: `YYYY/MM/DD HH:mm:ss` (e.g., `2026/01/22 15:30:00`)
  - Picker closes automatically
  - Input field shows the new value

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 1.3: Focus Input Auto-Opens Picker**
**Component:** Input #3 (With Initial Value)

**Steps:**
1. Scroll to "With Initial Value" section
2. Click **inside the input field** (not the icon)
3. Observe the picker behavior

**Expected Result:**
- ✅ Picker opens automatically on focus
- ✅ Picker shows current value (2026/01/20) pre-selected in calendar
- ✅ Time picker shows current time (13:07:04)

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 1.4: Click Outside Closes Picker**
**Component:** Any input with picker open

**Steps:**
1. Open picker on Input #1 (click calendar icon or focus input)
2. Click **anywhere outside** the picker (e.g., on the page background)

**Expected Result:**
- ✅ Picker closes immediately
- ✅ Input value remains unchanged (no update if "Confirm" not clicked)

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 1.5: Escape Key Closes Picker**
**Component:** Any input with picker open

**Steps:**
1. Open picker on Input #1
2. Press **Escape** key on keyboard

**Expected Result:**
- ✅ Picker closes immediately
- ✅ Input value remains unchanged

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 1.6: Custom Format Picker**
**Component:** Input #4 (Custom Format)

**Steps:**
1. Scroll to "Custom Format (Figma Style)" section
2. Note the initial format: `Jan-22-2026 20:00:00.000`
3. Click calendar icon to open picker
4. Select a different date and time
5. Click "Confirm"

**Expected Result:**
- ✅ Picker opens with current value pre-selected
- ✅ After confirm, value updates in **custom format**: `LLL-dd-yyyy HH:mm:ss.SSS`
- ✅ Example: `Jan-25-2026 14:30:00.000`
- ✅ Milliseconds display as `.000`

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

## 📋 **Test Suite 2: Validation States**

### **Test 2.1: Invalid Format Shows Error**
**Component:** Input #2 (Required)

**Steps:**
1. Scroll to "Required Field" section
2. Click inside the input
3. Type: `invalid text`
4. Click outside the input (blur)

**Expected Result:**
- ✅ Input border turns **RED**
- ✅ Error message appears below input
- ✅ Error icon visible (if applicable)

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 2.2: Valid Input Clears Error**
**Component:** Input #2 (Required) - continuing from Test 2.1

**Steps:**
1. Clear the invalid text
2. Type a valid date: `2026/01/21 10:00:00`
3. Press Tab or click outside

**Expected Result:**
- ✅ Red border **disappears**
- ✅ Error message **disappears**
- ✅ Input appears normal (default border)

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 2.3: Constraint Violation (Before Min)**
**Component:** Input #5 (With Constraints)

**Steps:**
1. Scroll to "With Constraints" section
2. Note helper text: "Valid range: Jan 20 - Dec 31, 2026"
3. Click inside input and type: `2026/01/01 10:00:00`
4. Press Tab or click outside

**Expected Result:**
- ✅ Input border turns **RED**
- ✅ Error message: "Date must be within 2026" (or similar)
- ✅ Console shows: `rangeUnderflow: true` in validity event

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 2.4: Constraint Violation (After Max)**
**Component:** Input #5 (With Constraints)

**Steps:**
1. Clear previous value
2. Type: `2027/06/15 12:00:00`
3. Press Tab or click outside

**Expected Result:**
- ✅ Input border turns **RED**
- ✅ Error message: "Date must be within 2026" (or similar)
- ✅ Console shows: `rangeOverflow: true` in validity event

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 2.5: Valid Date Within Constraints**
**Component:** Input #5 (With Constraints)

**Steps:**
1. Clear previous value
2. Type: `2026/06/15 12:00:00` (valid date within range)
3. Press Tab or click outside

**Expected Result:**
- ✅ Input border is **NORMAL** (no red)
- ✅ **NO** error message
- ✅ Helper text still visible: "Valid range: Jan 20 - Dec 31, 2026"
- ✅ Console shows: `valid: true`

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 2.6: Required Field - Empty Submission**
**Component:** Input #2 (Required)

**Steps:**
1. Scroll to "Required Field" section
2. Ensure input is **empty**
3. Click outside or press Tab

**Expected Result:**
- ✅ Input border turns **RED**
- ✅ Error message: "This field is required" (or similar)
- ✅ Console shows: `valueMissing: true`

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

## 📋 **Test Suite 3: Disabled & Readonly States**

### **Test 3.1: Disabled Input**
**Component:** Input #6 (Disabled State)

**Steps:**
1. Scroll to "Disabled State" section
2. Try to click inside the input field
3. Try to click the calendar icon
4. Observe visual appearance

**Expected Result:**
- ✅ Input field is **NOT clickable** (cursor shows "not-allowed")
- ✅ Input has **grayed out** appearance
- ✅ Calendar icon is **HIDDEN** or **disabled**
- ✅ Value "2026/01/20 13:07:04" is displayed but not editable

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 3.2: Readonly Input**
**Component:** Input #7 (Readonly State)

**Steps:**
1. Scroll to "Readonly State" section
2. Click inside the input field
3. Try to type
4. Try to click the calendar icon
5. Observe visual appearance

**Expected Result:**
- ✅ Input field can be **focused** (cursor visible)
- ✅ **Cannot type** or edit the value
- ✅ Calendar icon is **HIDDEN**
- ✅ Value "2026/01/20 13:07:04" is displayed
- ✅ Visual appearance similar to normal input (not grayed out like disabled)

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

## 📋 **Test Suite 4: Form Integration**

### **Test 4.1: Form Submission**
**Component:** Inputs #8 & #9 (Form Integration)

**Steps:**
1. Scroll to "Form Integration" section
2. In "Meeting Start Time", type: `2026/01/22 09:00:00`
3. In "Meeting End Time", type: `2026/01/22 17:00:00`
4. Click **"Submit Test"** button
5. Check browser console for form data

**Expected Result:**
- ✅ Form submits without page reload
- ✅ Console shows: `Form submitted!`
- ✅ Console shows FormData with:
  - `scheduleStart: "2026/01/22 09:00:00"`
  - `scheduleEnd: "2026/01/22 17:00:00"`
- ✅ Alert appears with JSON data

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 4.2: Form Reset**
**Component:** Inputs #8 & #9 (Form Integration)

**Steps:**
1. Ensure form has values from Test 4.1
2. Click browser's form reset button (if available) OR refresh page
3. Observe input fields

**Expected Result:**
- ✅ Both inputs are **cleared** (empty)
- ✅ No validation errors appear

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

## 📋 **Test Suite 5: Keyboard Navigation**

### **Test 5.1: Tab Navigation**
**Component:** All inputs on page

**Steps:**
1. Refresh the page
2. Press **Tab** repeatedly to navigate through all inputs
3. Observe focus order and picker behavior

**Expected Result:**
- ✅ Focus moves through inputs in correct order (1 → 2 → 3 → ... → 9)
- ✅ Each focused input shows **focus ring** (blue outline)
- ✅ Picker **opens automatically** when input receives focus
- ✅ Shift+Tab moves **backwards** through inputs

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 5.2: Enter Key Behavior**
**Component:** Input #1 (Basic Usage)

**Steps:**
1. Click inside Input #1
2. Type a valid date: `2026/01/25 10:00:00`
3. Press **Enter** key

**Expected Result:**
- ✅ Value is **accepted**
- ✅ Input does NOT trigger form submission (unless in a form)
- ✅ Picker closes if it was open

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 5.3: Arrow Keys in Input**
**Component:** Input #3 (With Initial Value)

**Steps:**
1. Click inside Input #3
2. Use **Arrow Left/Right** keys to move cursor
3. Try to edit parts of the date/time

**Expected Result:**
- ✅ Cursor moves left/right within the input text
- ✅ Can select and edit individual characters
- ✅ Can use Backspace/Delete to remove characters

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

## 📋 **Test Suite 6: Visual & Styling**

### **Test 6.1: Theme Consistency**
**Component:** All inputs

**Steps:**
1. Observe all inputs on the page
2. Compare with other iX components on the same page

**Expected Result:**
- ✅ Input border color matches iX theme
- ✅ Focus state (blue ring) matches other inputs
- ✅ Calendar icon style matches iX icon library
- ✅ Font family and size consistent with iX typography
- ✅ Spacing and padding look balanced

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 6.2: Picker Positioning**
**Component:** Input #1 (Basic Usage)

**Steps:**
1. Scroll to top of page
2. Open picker on Input #1
3. Observe dropdown position
4. Scroll to bottom of page
5. Open picker on Input #9
6. Observe dropdown position

**Expected Result:**
- ✅ Picker appears **below** input when space available
- ✅ Picker appears **above** input when near bottom of viewport
- ✅ Picker is **fully visible** (not cut off)
- ✅ Picker has proper **drop shadow** for elevation

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 6.3: Long Labels & Text Overflow**
**Component:** Input #5 (With Constraints)

**Steps:**
1. Observe the label and helper text
2. Resize browser window to narrow width
3. Observe text wrapping behavior

**Expected Result:**
- ✅ Label wraps to multiple lines if needed
- ✅ Helper text wraps properly
- ✅ No text is cut off or hidden
- ✅ Input remains usable at narrow widths

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

## 📋 **Test Suite 7: Edge Cases**

### **Test 7.1: Rapid Clicking**
**Component:** Input #1

**Steps:**
1. Rapidly click the **calendar icon** 5-10 times
2. Observe picker behavior

**Expected Result:**
- ✅ Picker toggles open/closed correctly
- ✅ No UI glitches or stuck states
- ✅ No console errors

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 7.2: Multiple Pickers Open**
**Component:** Inputs #1 and #2

**Steps:**
1. Open picker on Input #1
2. Without closing it, click calendar icon on Input #2
3. Observe what happens

**Expected Result:**
- ✅ First picker **closes automatically**
- ✅ Second picker **opens**
- ✅ Only **one picker visible** at a time

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 7.3: Copy/Paste Value**
**Component:** Input #3 (With Initial Value)

**Steps:**
1. Select the value in Input #3: `2026/01/20 13:07:04`
2. Copy it (Ctrl+C / Cmd+C)
3. Go to Input #1
4. Paste it (Ctrl+V / Cmd+V)
5. Click outside

**Expected Result:**
- ✅ Value pastes correctly
- ✅ Validation recognizes the pasted value as valid
- ✅ No errors appear

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 7.4: Partial Date Input**
**Component:** Input #1

**Steps:**
1. Clear Input #1
2. Type only: `2026/01`
3. Click outside

**Expected Result:**
- ✅ Input shows **validation error** (incomplete format)
- ✅ Error message appears
- ✅ Border turns red

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 7.5: Midnight & Edge Times**
**Component:** Input #1

**Steps:**
1. Type: `2026/01/25 00:00:00` (midnight)
2. Click outside
3. Clear and type: `2026/01/25 23:59:59` (end of day)
4. Click outside

**Expected Result:**
- ✅ Both values are **accepted as valid**
- ✅ No validation errors
- ✅ Values display correctly

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

## 📋 **Test Suite 8: Accessibility**

### **Test 8.1: Screen Reader Labels**
**Component:** All inputs

**Steps:**
1. Enable screen reader (if available: NVDA, JAWS, VoiceOver)
2. Tab through all inputs
3. Listen to announcements

**Expected Result:**
- ✅ Each input announces its **label**
- ✅ Required fields announce "required"
- ✅ Helper text is announced
- ✅ Error messages are announced when invalid

**Result:** [ ] PASS [ ] FAIL / [ ] SKIP (no screen reader)

**Notes:** _______________

---

### **Test 8.2: Keyboard-Only Usage**
**Component:** Input #1

**Steps:**
1. **WITHOUT using mouse**, navigate to Input #1 using Tab
2. Try to open picker using only keyboard
3. Try to select date/time using only keyboard
4. Try to confirm selection using only keyboard

**Expected Result:**
- ✅ Can navigate to input with Tab
- ✅ Can open picker with **Space** or **Enter** (or it opens on focus)
- ✅ Can navigate date picker with **Arrow keys**
- ✅ Can navigate time picker with **Tab** and **Arrow keys**
- ✅ Can confirm with **Enter** key

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

### **Test 8.3: Focus Indicators**
**Component:** All inputs

**Steps:**
1. Tab through all inputs
2. Observe focus indicators on each

**Expected Result:**
- ✅ Clear **blue outline** (focus ring) on focused input
- ✅ Focus ring has **sufficient contrast** (visible on all backgrounds)
- ✅ Focus ring does **NOT overlap** with content

**Result:** [ ] PASS [ ] FAIL

**Notes:** _______________

---

## 📊 **TEST SUMMARY**

**Total Tests:** 38

**Results:**
- ✅ **Passed:** _____ / 38
- ❌ **Failed:** _____ / 38
- ⏭️ **Skipped:** _____ / 38

**Pass Rate:** _____ %

---

## 🐛 **ISSUES FOUND**

List any bugs, unexpected behavior, or UX issues discovered:

1. _______________________________________________
   **Severity:** [ ] Critical [ ] High [ ] Medium [ ] Low

2. _______________________________________________
   **Severity:** [ ] Critical [ ] High [ ] Medium [ ] Low

3. _______________________________________________
   **Severity:** [ ] Critical [ ] High [ ] Medium [ ] Low

---

## 💡 **SUGGESTIONS FOR IMPROVEMENT**

List any enhancements or UX improvements:

1. _______________________________________________

2. _______________________________________________

3. _______________________________________________

---

## ✅ **SIGN-OFF**

**Tester Name:** _______________

**Date Completed:** _______________

**Overall Status:** [ ] APPROVED [ ] NEEDS FIXES

**Next Steps:** _______________________________________________

---

**END OF MANUAL TEST CHECKLIST**
