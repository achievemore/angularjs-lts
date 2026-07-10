# AngularJS LTS Vulnerability Exploitability Exchange

This document records the disposition of vulnerabilities in the AchieveMore
AngularJS LTS distribution. A vulnerability is marked `fixed` only after its
regression test passes against the generated distribution files.

| CVE | Component | Status | Release | Patch | Test | Limitations |
| --- | --- | --- | --- | --- | --- | --- |
| CVE-2026-11998 | AngularJS core | under_investigation | - | - | - | Full-regex SCE policy matching |
| CVE-2025-4690 | ngSanitize | under_investigation | - | - | - | `linky` filter ReDoS |
| CVE-2025-2336 | ngSanitize | under_investigation | - | - | - | SVG image URL sanitization |
| CVE-2025-0716 | AngularJS core | under_investigation | - | - | - | Compiled SVG image URL sanitization |
| CVE-2024-8372 | AngularJS core | under_investigation | - | - | - | `srcset` image policy bypass |
| CVE-2024-8373 | AngularJS core | under_investigation | - | - | - | `source[srcset]` policy bypass |
| CVE-2024-33665 | angular-translate | under_investigation | - | - | - | Unresolved translation-key XSS |
| CVE-2024-21490 | AngularJS core | under_investigation | - | - | - | `ng-srcset` ReDoS |
| CVE-2023-26118 | AngularJS core | under_investigation | - | - | - | URL input validator ReDoS |
| CVE-2023-26117 | ngResource | under_investigation | - | - | - | Trailing-slash ReDoS |
| CVE-2023-26116 | AngularJS core | under_investigation | - | - | - | `angular.copy(RegExp)` ReDoS |
| CVE-2022-25869 | AngularJS core | under_investigation | - | - | - | Internet Explorer cached-textarea XSS |
| CVE-2022-25844 | AngularJS core | under_investigation | - | - | - | Currency-format locale ReDoS |
