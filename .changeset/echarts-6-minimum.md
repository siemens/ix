---
'@siemens/ix-echarts': major
---

Drop support for ECharts 5. The `echarts` peer dependency is now `^6.0.0`. ECharts 5 is affected by a cross-site scripting (XSS) vulnerability ([CVE-2026-45249](https://github.com/advisories/GHSA-fgmj-fm8m-jvvx)) that is only fixed in ECharts 6.1.0. Update your application to ECharts 6.1.0 or newer before upgrading. See `BREAKING_CHANGES/v6.md` for migration steps.
