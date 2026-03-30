---
id: hiring-page-api
title: Hiring 
sidebar_label: Hiring
sidebar_position: 1
last_update:
  date: 2025/08/11
  author: Ijaan Yudana
---

# API and Redux

The hiring page uses a simple connection to the `hiring collection` in firestore and `application directory` in firebase to manage applications and cv's.

## API Functions

### subscribeHiring

This api subscribes to the hiring store to maintain sync with the `hiring collection`. 

This is called in the `Hiring Container` via `useEffect()` to manage data in its layouts.

### createApplicant

This takes an applicant's profile (A json file that should mirror the `hiring collection`). It connects to firestore and attempts to set a new doc using said data.

Parameters:

`profile`, a `hashmap` of data that should correspond to the `hiring collection` formatting.

It will also: 
- Auto-generate a `UUID`.
- Set the `APPLIED` keyDate as the `currentdate` if it has not been set already (this should not happen).
- Set the currentStage as `APPLIED`.
- Upload a file to the firebase `applications bucket` and return (and set) a `resumePath` if a file has been detected.
- Return a generic error if the process fails.

### deleteApplicant

Parameters:

Takes a given `id` and delete's that applicant's entry in `firestore` and their resume in `firebase` if applicable. Logs error "Error deleting applicant: ", e if the process fails.

- `id`, a `uuid` that may correspond to an applicant in the database.

### updateApplicantProgress

Replaces the document in `firestore` corresponding to the given applicant `id`. Logs error 'Error updating application progress' if the process fails.

Parameters:

- `id`, a `uuid` that may correspond to an applicant in the database.

- `updatedData`, a `hashmap` of data that should correspond to the `hiring collection` formatting.

### updateResume

A helper function that updates a resume in `firebase` corresponding to a given `id` acquired from given `profileData`. Logs error 'Failed to update user resume path, deleting uploaded resume' or 'Failed to upload file' and returns false if the process fails, or returns true if the process succeeds.

Parameters:

- `profileData`, a `hashmap` of data that should correspond to the `hiring collection` formatting.

- `newResume`, a file of docx or pdf format to upload to firebase.

### rmResume

Removes a resume in `firebase` corresponding to a given `id` acquired from given `profileData`. Logs error 'Failed to update user resume path, deleting uploaded resume...' or 'Failed to delete resume' if fails and returns false if fails, or true if it suceeds. 

Parameters:

- `profileData`, a `hashmap` of data that should correspond to the `hiring collection` formatting.

### deleteResume

A helper function that deletes a resume in `firebase` corresponding to a given `path`. Logs error 'Failed to delete resume' or 'No resume path given' and returns false if fails, or true if succeeds.

Parameters:

- `resumePath`, path in `firebase storage`.
- `storage`, a firebase storage connection object. 

### getResume

Retrieves a resume `file` given a `resumePath` from `firebase`. Throws an error 'Error getting PDF from storage' if fails, returns 'No resume provided' if there is no resume path, or the url upon success.

Parameters:

- `resumePath`, a path in `firebase storage`.

### uploadResume

A helper function that uploads a resume `file` of an `accepted filetype` to `firebase` given a resume `file`, `id` and `storage` object. If fails logs an error "failed to upload file" or "Attempt to upload incorrect MIME type", and returns resumePath upon success or '' upon fail.

Parameters:

- `resume`, an untrusted `file` that may not be an `accepted filetype` to be uploaded to `firebase` after checks.
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
