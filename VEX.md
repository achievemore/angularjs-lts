# AngularJS LTS Vulnerability Exploitability Exchange

This document records the disposition of vulnerabilities in the AchieveMore
AngularJS LTS distribution. A vulnerability is marked `fixed` only after its
regression test passes against the generated distribution files.

| CVE | Component | Status | Release | Patch | Test | Limitations |
| --- | --- | --- | --- | --- | --- | --- |
| CVE-2026-11998 | AngularJS core | fixed | 1.8.4-achievemore.1 | `a29bc88ad` | `sce-matcher.spec.js` | Custom policy regexes must themselves be ReDoS-safe |
| CVE-2025-4690 | ngSanitize | fixed | 1.8.4-achievemore.1 | `3c42aff26` | `linky-redos.spec.js` | Applies to the bundled `linky` filter |
| CVE-2025-2336 | ngSanitize | fixed | 1.8.4-achievemore.1 | `9c742aac5` | `svg-image-sanitization.spec.js` | SVG sanitization must remain enabled where SVG is accepted |
| CVE-2025-0716 | AngularJS core | fixed | 1.8.4-achievemore.1 | `9c742aac5` | `svg-image-sanitization.spec.js` | Image policy is application-configurable |
| CVE-2024-8372 | AngularJS core | fixed | 1.8.4-achievemore.1 | `aa0b03392` | `srcset-sanitization.spec.js` | Candidate whitespace is normalized |
| CVE-2024-8373 | AngularJS core | fixed | 1.8.4-achievemore.1 | `aa0b03392` | `srcset-sanitization.spec.js` | Covers `img` and `source` assignment paths |
| CVE-2024-33665 | angular-translate | fixed | 1.8.4-achievemore.1 | `c4803c07a` | `angular-translate-xss.spec.js` | Registered translations and explicit defaults may contain HTML |
| CVE-2024-21490 | AngularJS core | fixed | 1.8.4-achievemore.1 | `aa0b03392` | `srcset-sanitization.spec.js` | Parser is linear in input length |
| CVE-2023-26118 | AngularJS core | fixed | 1.8.4-achievemore.1 | `89d4de225` | `core-redos.spec.js` | URL validation remains compatible with 1.8.3 cases |
| CVE-2023-26117 | ngResource | fixed | 1.8.4-achievemore.1 | `141f6463d` | `resource-redos.spec.js` | Trailing slash scan is linear |
| CVE-2023-26116 | AngularJS core | fixed | 1.8.4-achievemore.1 | `89d4de225` | `core-redos.spec.js` | Requires `RegExp.prototype.flags` |
| CVE-2022-25869 | AngularJS core | fixed | 1.8.4-achievemore.1 | `5a4267ecf` | `unsupported-ie.spec.js` | Mitigated by refusing all Internet Explorer versions |
| CVE-2022-25844 | AngularJS core | fixed | 1.8.4-achievemore.1 | `89d4de225` | `core-redos.spec.js` | Locale patterns without a currency marker return early |
