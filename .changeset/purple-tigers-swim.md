---
'@siemens/ix-echarts': patch
---

Sync ECharts theme colors and tooltip styles with updated Siemens Theme Generator design tokens.

**Reason for update:** The [Siemens Theme Generator](https://code.siemens.com/siemens-ix/theme-generator/-/tree/main) tokens were updated with new color values for chart palettes and tooltip styling. These changes ensure visual consistency between the ECharts themes and the official Siemens design system.

**classic-dark.ts:**

- `chart-8` color: `#3664C6` → `#9EBBFF` ([Classic Dark.json#L636](https://code.siemens.com/siemens-ix/theme-generator/-/blob/main/tokens/Theme/Classic%20Dark.json#L636): chart-8)
- `chart-17` color: `#AAAA96` → `#B5BD00` ([Classic Dark.json#L708](https://code.siemens.com/siemens-ix/theme-generator/-/blob/main/tokens/Theme/Classic%20Dark.json#L708): chart-17)
- `axisTick` color: `rgba(255,255,255,0.3)` → `rgba(255,255,255,0.35)` ([Classic Dark.json#L733](https://code.siemens.com/siemens-ix/theme-generator/-/blob/main/tokens/Theme/Classic%20Dark.json#L733): chart-ticks)
- `tooltip.backgroundColor`: `#283236` → `#0f1619cc` ([Classic Dark.json#L738](https://code.siemens.com/siemens-ix/theme-generator/-/blob/main/tokens/Theme/Classic%20Dark.json#L738): chart-tooltip-fill)
- `tooltip.borderColor`: `#283236` → `#ffffff40` ([Classic Dark.json#L743](https://code.siemens.com/siemens-ix/theme-generator/-/blob/main/tokens/Theme/Classic%20Dark.json#L743): chart-tooltip-bdr)

**classic-light.ts:**

- `tooltip.backgroundColor`: `#eff0f1` → `#ffffffcc` ([Classic Light.json#L738](https://code.siemens.com/siemens-ix/theme-generator/-/blob/main/tokens/Theme/Classic%20Light.json#L738): chart-tooltip-fill)
- `tooltip.borderColor`: `#eff0f1` → `#00000033` ([Classic Light.json#L743](https://code.siemens.com/siemens-ix/theme-generator/-/blob/main/tokens/Theme/Classic%20Light.json#L743): chart-tooltip-bdr)

**brand-dark.ts:**

- `chart-5` color: `#FFBC66` → `#7D8099` ([Brand Dark.json#L616](https://code.siemens.com/siemens-ix/theme-generator/-/blob/main/tokens/Theme/Brand%20Dark.json#L616): chart-5)
- `axisLine` color: `rgba(255,255,255,0.35)` → `rgba(255,255,255,0.3)` ([Brand Dark.json#L722](https://code.siemens.com/siemens-ix/theme-generator/-/blob/main/tokens/Theme/Brand%20Dark.json#L722): chart-axes)
- `tooltip.backgroundColor`: `#23233c` → `#000028cc` ([Brand Dark.json#L742](https://code.siemens.com/siemens-ix/theme-generator/-/blob/main/tokens/Theme/Brand%20Dark.json#L742): chart-tooltip-fill)
- `tooltip.borderColor`: `#23233c` → `#ffffff40` ([Brand Dark.json#L747](https://code.siemens.com/siemens-ix/theme-generator/-/blob/main/tokens/Theme/Brand%20Dark.json#L747): chart-tooltip-bdr)

**brand-light.ts:**

- `chart-5` color: `#801100` → `#4C4C68` ([Brand Light.json#L616](https://code.siemens.com/siemens-ix/theme-generator/-/blob/main/tokens/Theme/Brand%20Light.json#L616): chart-5)
- `tooltip.backgroundColor`: `#f3f3f0` → `#ffffffcc` ([Brand Light.json#L742](https://code.siemens.com/siemens-ix/theme-generator/-/blob/main/tokens/Theme/Brand%20Light.json#L742): chart-tooltip-fill)
- `tooltip.borderColor`: `#f3f3f0` → `#00002833` ([Brand Light.json#L747](https://code.siemens.com/siemens-ix/theme-generator/-/blob/main/tokens/Theme/Brand%20Light.json#L747): chart-tooltip-bdr)
