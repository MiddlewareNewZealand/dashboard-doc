---
id: topics-auth
title: Auth
sidebar_label: Auth
sidebar_position: 1
last_update:
  date: 11/08/2025
  author: Ijaan Yudana
---

# Auth (RBAC)

Three topics are used for rbac auth.

- `AuthProfileOnLogin`
- `AuthProfileOnSignup`
- `deleteUserOnRoleDelete`

## Key Function

### writeProfile() in firebase.auth.js

- excludes non middleware `email` domains

- reads `profile` collection via `email`
- reads rbac-profiles collection via `workflowId` and extracts if the user `isAdmin`

- updates `profile` via `email` with new data
- updates `roles`, read is always true, write is based on `isAdmin`, `email` is appended

```js
async function writeProfile(user, source) {
  const { email, uid } = user;
  const transformedUser = transformUser(user);

  console.log(`Writing user profile from trigger ${source}`, user); //log

  if (!isMiddlewareUser(transformedUser)) {
    // TODO: Trigger analytics event
    console.warn('Login with non-middleware account', transformedUser);
    throw new Error(`Invalid login access with non-middleware account ${JSON.stringify(transformedUser)}`);
  }

  const profileDoc = await firestore.collection('profile').doc(email).get();
  const { workflowId } = profileDoc.data();
  const rbacDoc =  await firestore.collection('rbac-profiles').doc(String(workflowId)).get(); 
  let isAdmin = false;
  if (rbacDoc.exists){ //rbac-profiles is a collection of {id:string, roles: {map}}
    console.log(`Fetched user RBAC profile:`, rbacDoc.data());
    isAdmin =  rbacDoc.data().roles.includes("Admin");
  }
    

  const batch = firestore.batch();
  batch.set(firestore.collection('profile').doc(email), transformedUser, { merge: true }); 
  batch.set(firestore.collection('roles').doc(uid), { read: true, write: isAdmin, email }, { merge: true }); //give read/write perms

  return batch.commit();
}
```

## AuthProfileOnLogin

When the `user` logs in, the app connects to `firebase` via `onCall`. 

In an `anonymous function`, the `user` sends data from the `Auth` user profile (acquired from `googleAuth`). `Firebase` overrides the `uid` and `email` parameters with its own `trusted context`.

Finally `writeProfile` is called with this combined data and the `login` tag for `logging` purposes.

```js
exports.authProfileOnLogin = functions
  .region(API_FUNCTION_REGION)
  .runWith(API_FUNCTION_RUNTIME_OPTS)
  .https.onCall(async (data, context) => { //Connection to database with Auth profile data and firebase context
    const { user } = data; //user provided data
    const { auth } = context || {}; //values to override userdata from firebase context
    const { uid, token } = auth || {};
    const { email } = token || {};

    return writeProfile(
      {
        ...user,
        uid: uid || null, //overriding
        email: email || null, //overriding
      },
      'login', //logging purposes
    );
  });
```

## AuthProfileOnSignup

`Writes` or `overwrites` entries in `roles` based on user provided data using `writeProfile`

```js
exports.authProfileOnSignup = functions
  .region(FUNCTION_REGION)
  .auth.user()
  .onCreate(async (user) => writeProfile(user, 'signup'));
```

## deleteUserOnRoleDelete

Deletes `user` based on `id` from `firebase context`
