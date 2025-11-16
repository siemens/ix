/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDatetimePicker } from '@siemens/ix-react';

export default () => {
  const handleTimeChange = (event: CustomEvent<string>) => {
    console.log('⏰ onTimeChange event:', event.detail);
  };

  const handleDateChange = (event: CustomEvent<any>) => {
    console.log('📅 onDateChange event:', event.detail);
  };

  const handleDateSelect = (event: CustomEvent<any>) => {
    console.log('✅ onDateSelect event (Done clicked):', event.detail);
  };

  return (
    <div
      style={{
        overflow: 'scroll',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '24px',
      }}
    >
      <IxDatetimePicker
        // dateFormat="yyyy-MM-dd"
        // timeFormat="h:mm:ss.SSS a"
        // from="2025-11-01"
        // time="02:01:00.000 AM"
        onTimeChange={handleTimeChange}
        onDateChange={handleDateChange}
        onDateSelect={handleDateSelect}
      />

      {/*/!* Config 0: Default - Tests component with no custom props *!/*/}
      {/*<div>0. Default configuration</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 0.1: Hour only (24h) - Tests minimal time with single column *!/*/}
      {/*<div>0.1. Hour only (24-hour format)</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*  timeFormat="HH"*/}
      {/*/>*/}

      {/*/!* Config 0.2: Hour + AM/PM only - Tests minimal 12-hour format *!/*/}
      {/*<div>0.2. Hour + AM/PM only</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*  timeFormat="h a"*/}
      {/*/>*/}

      {/*/!* Config 1: Full 12-hour with milliseconds - Tests all time columns in 12h format *!/*/}
      {/*<div>1. Full 12-hour format (h:mm:ss.SSS a)</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="h:mm:ss.SSS a"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="9:00:00.000 AM"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 2: Standard 12-hour - Tests most common time format (h:mm a) *!/*/}
      {/*<div>2. Standard 12-hour (h:mm a) - Most common format</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="h:mm a"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="3:30 PM"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 3: Standard 24-hour - Tests most common 24h format *!/*/}
      {/*<div>3. Standard 24-hour (HH:mm)</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="HH:mm"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="15:30"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 4: 24-hour with seconds - Tests HH:mm:ss format *!/*/}
      {/*<div>4. 24-hour with seconds (HH:mm:ss)</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="HH:mm:ss"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="09:00:00"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 5: 12-hour with seconds - Tests h:mm:ss a format *!/*/}
      {/*<div>5. 12-hour with seconds (h:mm:ss a)</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="h:mm:ss a"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="9:00:00 AM"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 6: Slash date format + noon - Tests alternative date separator & 12:00 PM edge case *!/*/}
      {/*<div>6. Slash date format (yyyy/MM/dd) + noon (12:00 PM)</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy/MM/dd"*/}
      {/*  timeFormat="h:mm a"*/}
      {/*  from="2025/11/01"*/}
      {/*  time="12:00 PM"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 7: Midnight - Tests 12:00 AM edge case (start of day) *!/*/}
      {/*<div>7. Midnight (12:00 AM) - Start of day edge case</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="h:mm a"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="12:00 AM"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 8: Date range - Tests 'to' prop for date range selection *!/*/}
      {/*<div>8. Date range (from/to) - Tests range selection</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="h:mm a"*/}
      {/*  from="2025-11-01"*/}
      {/*  to="2025-12-31"*/}
      {/*  time="9:00 AM"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 9: Full 24-hour with milliseconds - Tests all time columns in 24h format *!/*/}
      {/*<div>9. Full 24-hour format (HH:mm:ss.SSS)</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="HH:mm:ss.SSS"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="09:00:00.000"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* ========== CORNER CASES ========== *!/*/}

      {/*/!* Config 10: Almost midnight - Tests 11:59:59.999 PM boundary *!/*/}
      {/*<div>10. Almost midnight (11:59:59.999 PM) - End of day boundary</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="h:mm:ss.SSS a"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="11:59:59.999 PM"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 11: Just past midnight - Tests 12:01 AM *!/*/}
      {/*<div>11. Just past midnight (12:01 AM)</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="h:mm a"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="12:01 AM"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 12: Just before noon - Tests 11:59 AM *!/*/}
      {/*<div>12. Just before noon (11:59 AM)</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="h:mm a"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="11:59 AM"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 13: Just past noon - Tests 12:01 PM *!/*/}
      {/*<div>13. Just past noon (12:01 PM)</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="h:mm a"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="12:01 PM"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 14: Midnight in 24h - Tests 00:00 (start of day) *!/*/}
      {/*<div>14. Midnight in 24-hour (00:00) - Start of day</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="HH:mm"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="00:00"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 15: End of day in 24h - Tests 23:59:59 *!/*/}
      {/*<div>15. End of day in 24-hour (23:59:59)</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="HH:mm:ss"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="23:59:59"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 16: Single digit hour (AM) - Tests hour without zero-padding *!/*/}
      {/*<div>16. Single digit hour (1:00 AM) - No zero-padding</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="h:mm a"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="1:00 AM"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 17: Single digit hour (PM) - Tests hour without zero-padding in PM *!/*/}
      {/*<div>17. Single digit hour (5:30 PM) - No zero-padding PM</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="h:mm a"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="5:30 PM"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 18: Hour 0 in 24h - Tests 00 hour with minutes and seconds *!/*/}
      {/*<div>18. Hour 0 in 24-hour (00:30:45) - After midnight</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="HH:mm:ss"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="00:30:45"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 19: Evening hours (13-23) - Tests hour range not in 12h format *!/*/}
      {/*<div>19. Evening hours (18:45) - Hour range 13-23</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="HH:mm"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="18:45"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* ========== MORE EDGE CASES ========== *!/*/}

      {/*/!* Config 20: Early morning (2-3 AM) - Tests low hour values *!/*/}
      {/*<div>20. Early morning (2:30 AM) - Low hour values</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="h:mm:ss a"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="2:30:00 AM"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 21: Late evening (10-11 PM) - Tests high PM hour values *!/*/}
      {/*<div>21. Late evening (10:45 PM) - High PM hour values</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="h:mm:ss a"*/}
      {/*  from="2025-11-01"*/}
      {/*  time="10:45:00 PM"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}

      {/*/!* Config 22: Far future date - Tests date handling with distant dates *!/*/}
      {/*<div>22. Far future date (2030-12-25) - Distant date handling</div>*/}
      {/*<IxDatetimePicker*/}
      {/*  dateFormat="yyyy-MM-dd"*/}
      {/*  timeFormat="h:mm a"*/}
      {/*  from="2030-12-25"*/}
      {/*  time="6:00 PM"*/}
      {/*  onTimeChange={handleTimeChange}*/}
      {/*  onDateChange={handleDateChange}*/}
      {/*  onDateSelect={handleDateSelect}*/}
      {/*/>*/}
    </div>
  );
};
