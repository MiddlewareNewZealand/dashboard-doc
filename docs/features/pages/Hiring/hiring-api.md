---
id: hiring-page-api
title: Api and Redux
sidebar_label: Api + Redux
sidebar_position: 7
last_update:
  date: 11/08/2025
  author: Ijaan Yudana
---

# API and Redux

The hiring page uses a simple connection to the [`hiring collection`](../../cloud-storage/Firestore/Collections/hiring.md) in firestore and [`application directory`](../../cloud-storage/Firebase/Buckets/applications.md) in firebase to manage applications and cv's.

## API Functions

### subscribeHiring

This api subscribes to the hiring store to maintain sync with the [`hiring collection`](../../cloud-storage/Firestore/Collections/hiring.md). 

This is called in the `Hiring Container` via `useEffect()` to manage data in its layouts.

### createApplicant

This takes an applicant's profile (A json file that should mirror the [`hiring collection`](../../cloud-storage/Firestore/Collections/hiring.md)). It connects to firestore and attempts to set a new doc using said data.

Parameters:

`profile`, a `hashmap` of data that should correspond to the [`hiring collection`](../../cloud-storage/Firestore/Collections/hiring.md)) formatting.

It will also: 
- Auto-generate a `UUID`.
- Set the `APPLIED` keyDate as the `currentdate` if it has not been set already (this should not happen).
- Set the currentStage as `APPLIED`.
- Upload a file to the firebase [`applications bucket`](../../cloud-storage/Firebase/Buckets/applications.md) and return (and set) a `resumePath` if a file has been detected.
- Return a generic error if the process fails.

### deleteApplicant

Parameters:

Takes a given `id` and delete's that applicant's entry in [`firestore`]((../../cloud-storage/Firestore/Collections/hiring.md)) and their resume in [`firebase`](../../cloud-storage/Firebase/Buckets/applications.md) if applicable. Logs error "Error deleting applicant: ", e if the process fails.

- `id`, a `uuid` that may correspond to an applicant in the database.

### updateApplicantProgress

Replaces the document in [`firestore`]((../../cloud-storage/Firestore/Collections/hiring.md)) corresponding to the given applicant `id`. Logs error 'Error updating application progress' if the process fails.

Parameters:

- `id`, a `uuid` that may correspond to an applicant in the database.

- `updatedData`, a `hashmap` of data that should correspond to the [`hiring collection`](../../cloud-storage/Firestore/Collections/hiring.md)) formatting.

### updateResume

A helper function that updates a resume in [`firebase`](../../cloud-storage/Firebase/Buckets/applications.md) corresponding to a given `id` acquired from given `profileData`. Logs error 'Failed to update user resume path, deleting uploaded resume' or 'Failed to upload file' and returns false if the process fails, or returns true if the process succeeds.

Parameters:

- `profileData`, a `hashmap` of data that should correspond to the [`hiring collection`](../../cloud-storage/Firestore/Collections/hiring.md)) formatting.

- `newResume`, a file of docx or pdf format to upload to firebase.

### rmResume

Removes a resume in [`firebase`](../../cloud-storage/Firebase/Buckets/applications.md) corresponding to a given `id` acquired from given `profileData`. Logs error 'Failed to update user resume path, deleting uploaded resume...' or 'Failed to delete resume' if fails and returns false if fails, or true if it suceeds. 

Parameters:

- `profileData`, a `hashmap` of data that should correspond to the [`hiring collection`](../../cloud-storage/Firestore/Collections/hiring.md)) formatting.

### deleteResume

A helper function that deletes a resume in [`firebase`](../../cloud-storage/Firebase/Buckets/applications.md) corresponding to a given `path`. Logs error 'Failed to delete resume' or 'No resume path given' and returns false if fails, or true if succeeds.

Parameters:

- `resumePath`, path in [`firebase storage`](../../cloud-storage/Firebase/Buckets/applications.md).
- `storage`, a firebase storage connection object. 

### getResume

Retrieves a resume `file` given a `resumePath` from [`firebase`](../../cloud-storage/Firebase/Buckets/applications.md). Throws an error 'Error getting PDF from storage' if fails, returns 'No resume provided' if there is no resume path, or the url upon success.

Parameters:

- `resumePath`, a path in [`firebase storage`](../../cloud-storage/Firebase/Buckets/applications.md).

### uploadResume

A helper function that uploads a resume `file` of an [`accepted filetype`](../Hiring/hiring-controller.md) to [`firebase`](../../cloud-storage/Firebase/Buckets/applications.md) given a resume `file`, `id` and `storage` object. If fails logs an error "failed to upload file" or "Attempt to upload incorrect MIME type", and returns resumePath upon success or '' upon fail.

Parameters:

- `resume`, an untrusted `file` that may not be an [`accepted filetype`](../Hiring/hiring-controller.md) to be uploaded to [`firebase`](../../cloud-storage/Firebase/Buckets/applications.md) after checks.
- `id`, a `uuid` that may correspond to an applicant in the database.
- `storage`, a firebase storage connection object. 

## Redux Functions

### getHiring

Returns the current `hiring` field in the client's state.

### reducer

For a `SET_HIRING` action, set the `hiring` field in the client's state to the payload and return the updated state.

Else, return state.

### setHiring

...



