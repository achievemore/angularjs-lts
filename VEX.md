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

## Distribution scope

The dispositions above apply to every bundle in `dist/`, which as of
`1.9.11-achievemore.1` covers AngularJS core, `ngResource`, `ngSanitize`,
`ngAnimate`, `ngMessages`, and `angular-translate`. Sourcing any of these
modules from an upstream AngularJS 1.8.x release instead re-introduces the
unpatched code paths, because the fixes are not present upstream.

Advisories published against `npm:angular` that are marked
`first_patched_version <= 1.8.0` (GHSA-28hp-fgcr-2r4h, CVE-2019-10768,
CVE-2019-14863, CVE-2020-7676, GHSA-5cp4-xmrw-59wf) are not applicable: this
distribution is built from upstream 1.8.3, which already contains those fixes.

## Version numbering

This distribution is versioned `1.9.x` while being built from upstream
AngularJS 1.8.3. The renumber is deliberate: the advisories above have affected
ranges ending at 1.8.3, so a `1.8.x` version string causes version-based
scanners to report them against a distribution in which they are fixed. The
version communicates "not the vulnerable 1.8.x line"; it does not claim
upstream feature parity with a 1.9 release, which does not exist.
