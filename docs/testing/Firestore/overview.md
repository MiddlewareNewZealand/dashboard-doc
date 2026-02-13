---
id: overview
title: Overview
sidebar_label: Overview
sidebar_position: 1
last_update:
  date: 2026/02/11
  author: Ijaan Yudana
---

The main ethos behind this testing system is that each test is completely isolated in execution, though they are grouped by role, then collection. This is done by the following:

 - **Test functions are standardised and are defined in the utils class.** 
     - Every read function is the same. There can be overrides in descriptions where extra clarification is required
 - **If tests need seeded data, a fresh database is provided and documents are seeded according to a given scenario** 
     - So tests cannot "share" a database. The database data is controlled by the seeder.

Thus the testing suite as a whole can be thought of as:

- **rules.test** Orchestrator and executor
- **seeder** Database manager
- **utils** Standard test template provider

```mermaid
classDiagram
    direction TB

    class `firestore-test-consts` {
        <<module>>
        +FIRESTORE_COLLECTIONS object
        +OTHER_USER_EMAIL string
    }

    class FirestoreTestHelpers {
        <<firestore-test-templates>>
        -getDb() Firestore
        -getSeeder() FirestoreSeeder
        +canRead(path, options)
        +cannotRead(path, options)
        +canList(path, options)
        +cannotList(path, options)
        +canCreate(path, data, options)
        +cannotCreate(path, data, options)
        +canWrite(path, data, options)
        +cannotWrite(path, data, options)
        +canUpdate(path, data, options)
        +cannotUpdate(path, data, options)
        +canDelete(path, options)
        +cannotDelete(path, options)
        -_runWithScenario(name, scenario, fn)
    }

    class FirestoreSeeder {
        <<firestore-test-seeders>>
        -testEnv TestEnvironment
        +seedDocument(path, data)
        +cleanup()
        +setupTravelPlanScenario(userEmail, otherEmail)
        +setupAdminTravelPlanScenario(otherEmail)
        +setupJobManagerScenario(email, managedIds, unmanagedIds, createMonth)
    }

    class TestEnvironment {
        <<Firebase>>
        +authenticatedContext(uid, claims) Context
        +withSecurityRulesDisabled(fn)
        +clearFirestore()
        +cleanup()
    }

    class Scenario {
        <<interface>>
        +setup(seeder) Promise
    }

    class TestSuite {
        <<abstract>>
        #email string
        #claims object
        #database Firestore
        #t FirestoreTestHelpers
    }

    class BasicUserSuite {
        email: basic.user@middleware.co.nz
        claims: email only
        scenario: travelPlanScenario
    }

    class AdminSuite {
        email: admin.user@middleware.co.nz
        claims: admin=true
        scenario: adminTravelPlanScenario
    }

    class SMTSuite {
        email: smt.user@middleware.co.nz
        claims: smt=true
    }

    class FinanceSuite {
        email: finance.user@middleware.co.nz
        claims: finance=true
    }

    class JobManagerSuite {
        email: jobmanager.user@middleware.co.nz
        claims: job manager=true
        scenario: scenarioWithMonth
        scenario: scenarioWithoutMonth
    }

    note for FirestoreTestHelpers "_runWithScenario: #1 cleanup > #2 seed > #3 test > #4 cleanup."

    TestSuite <|-- BasicUserSuite
    TestSuite <|-- AdminSuite
    TestSuite <|-- SMTSuite
    TestSuite <|-- FinanceSuite
    TestSuite <|-- JobManagerSuite

    TestSuite --> FirestoreTestHelpers : creates
    FirestoreTestHelpers --> FirestoreSeeder : uses via getSeeder()
    FirestoreTestHelpers ..> Scenario : accepts in options
    FirestoreSeeder --> TestEnvironment : delegates to
    FirestoreSeeder --> `firestore-test-consts` : imports COLLECTIONS
    TestSuite --> `firestore-test-consts` : imports COLLECTIONS & OTHER_USER_EMAIL
    Scenario ..> FirestoreSeeder : calls setup(seeder)
```

