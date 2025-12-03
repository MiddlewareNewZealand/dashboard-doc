---
id: firebase-security-rules
title: Security Rules
sidebar_label: Security Rules
sidebar_position: 3
last_update:
  date: 2025/08/13
  author: Ijaan Yudana
---

# Firebase Security Rules

[Official documentation](https://firebase.google.com/docs/rules)

:::tip
[Click here](../cloud/Firestore/rules.md) For advice more specific to this project
:::

Firebase `security rules` restrict `read`/`write` access to data collections/directories based on given parameters. In our case, we make use of `custom claims`, which can be `read` from the user's auth `data`.

This is where the data is truly secured. So make sure that the security rules are set correctly.

:::warning
    Writing statements further down a function will `overwrite` prior functions. e.g

    ```js
        service cloud.firestore {
            match /databases/{database}/documents {

                //statement 1
                match /foo/{bar}{
                    allow read;
                    allow write false;
                }
                //statement 2
                match /{document=**} {
                    allow read;
                    allow write true;

                }
            }
        }
    ```

    In this case, you will always be able to write to foo/\{bar\} because it is getting overwritten by statement 2. If you want to maintain this data structure, you will need to specifically `exclude` the directory. 

    ```js
        //statement 2 modified
        match /{collection}/{doc}{
            allow read;
            allow write: if collection != 'foo';
        }
    ```

    You could make a list to make this less tedious if you have many exclusions. Of course, a `whitelist` is more desirable either way.
:::

:::tip
    One of the benefits of using `custom claims` is that checking permissions, even to a very deep level of granularity, is quite simple. e.g

    ```js
    match /foo/{bar}{
        allow read: if request.auth.token.user;
        allow write: if request.auth.token.admin;
    }
    ```

    You could have very specfic `claims` if you want even more granular permissions e.g

    ```js
    match /foo/{bar}/{woo}{
        allow read: if request.auth.token.canReadThisSuperSpecificField;
        allow write: if request.auth.token.canWriteThisSuperSpecificField;
    }
    ```

    Be careful with this as tokens can only hold 1000 bytes of data. 

    Compare this to holding roles in firestore:

    ```js
    function hasReadAccess(){
        return get(/databases/$(database)/documents/roles/$(request.auth.uid)).data.read == true;
    }

    function hasWriteAccess(){
        return get(/databases/$(database)/documents/roles/$(request.auth.uid)).data.write == true;
    }

    match /{collection}/{doc} {
        allow read: if hasReadAccess();
        allow write: if hasWriteAccess();
    }
    ```
:::
