---
id: role-map
title: Role Map
sidebar_label: Role Map
sidebar_position: 2
last_update:
  date: 2026/02/10
  author: Ijaan Yudana
---

## Role List

- `SMT` (Senior Management Team)
- `ADMIN`
- `SUPER_ADMIN`
- `JOB_MANAGER`
- `FINANCE`
- `EMPLOYEES`
- `ENGINEERING`
- `CONTRACTORS`
- `Auth` is authenticated with an `@middleware.co.nz` email domain.

## Collections and assigned roles

| Collection       | Role (r/w)                             |
| ---------------- | -------------------------------------- |
| profile          | ALL (r\*) [^1]                         |
| ALL utilisation  | SMT, FINANCE, JOB MANAGER (r\*)[^2]    |
| ALL forecast     | SMT, FINANCE, JOB MANAGER (r*/w*) [^3] |
| hiring           | SMT (r/w)                              |
| leads            | ADMIN, SMT (r)                         |
| ALL times        | SMT (r)[^4]                            |
| leave            | ALL (r)                                |
| jobs             | ALL (r\*)[^5]                          |
| clients          | SMT                                    |
| widget approvals | ADMIN (r/w)                            |
| ALL travelplans  | ALL (r/w) [^6]                         |
| Banner           | ALL (r/w\*)[^7]                        |
| events           | ALL (r)                                |
| useful links     | ALL (r/w) [^8]                         |
| widget-data      | ALL (r/w) [^9]                         |

:::info

- `*` Means that read or write access is different based on roles.

- In collections, there are often groups of collections that are used together. ALL refers to these groups, rather than listing each individual one.

- If a collection is not mentioned, then it is likely to be used solely by the system with no read/write access for any users via the dashboard.
  :::

[^1]: Excl. contractEndDate - restricted to SMT

[^2]: Job Managers can only access job data pertaining to their own job + job_manager_index data, profile data, jobIds

[^3]: Job Mangers can only read and write to their managed jobs.

[^4]: This collection needs to be accessed by lots of people. It is all WorkflowMax timesheet data

[^5]: Non-admins should only be able to access their own jobs. Excludes jobsv2 - only server for now

[^6]: Only admins can access all sensitive data (Otherwise, people can only access their own sensitive data). Only admins can write.

[^7]: Only admins can write

[^8]: Users can only read/write to their own links.

[^9]: Users can only read/write to their own documents