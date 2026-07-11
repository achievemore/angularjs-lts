# Security Policy

## Supported Versions

| Version | Supported | Notes |
| --- | --- | --- |
| `1.8.4-achievemore.1` | Yes | Security fixes listed in `VEX.md` |
| Earlier AchieveMore versions | No | Upgrade to the latest immutable tag |
| Upstream AngularJS releases | No | Upstream support ended in January 2022 |

Internet Explorer is unsupported. The distribution targets browsers with
ES2016 support.

## Reporting

Report suspected vulnerabilities privately through GitHub Security Advisories
for `achievemore/angularjs-lts`. Include the affected bundle, a minimal proof of
concept, browser version, and expected impact. Do not open a public issue before
maintainers have had an opportunity to assess the report.

## Scope

The release claim covers the exact files attached to the GitHub release and
verified by `dist/SHA256SUMS`. Application code, third-party plugins, custom SCE
regular expressions, and unsafe use of trust-bypass APIs remain the consumer's
responsibility.
