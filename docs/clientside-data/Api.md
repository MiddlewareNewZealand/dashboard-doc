---
id: clientside-data-api
title: Api
sidebar_label: Api
sidebar_position: 4
last_update:
  date: 2025/12/3
  author: Ijaan Yudana
---

In other projects, this would likely be called a `service`, but here it is called an `Api`. These make the actual request to external sources. If there is an error, you can simply `throw` an error which will be picked up by the `epic`.

e.g

```js
export function fetchData(isAdmin){
    async function doFetchData(){
        if(!isAdmin){
            throw new Error('Only Admins can access this resource')
        }
        try{
            return data = someSortOfGetRequest();
        }catch (error){
            throw new Error('Failed to retrieve data')
        }
    }

    return doFetchData() || [];
}
```
