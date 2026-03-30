---
id: sp-hook
title: Hook
sidebar_label: Hook
sidebar_position: 4
last_update:
  date: 2026/03/30
  author: Ijaan Yudana
---

The hook interfaces with [redux](../Redux/Overview.md) [actions](../Redux/Action.md) and/or [selectors](../Redux/Selector.md). In summary, the hook will:

- Retrieve the loading, error, and data states (Updating if they change)
- Check user permissions
- Define useful functions i.e:
  - Defining functions i.e:
    - Calling `redux actions`
  - Transforming datasets (This can be done at the selector level)

Hooks will often receive params from the `container` and return data/loading/error states from `redux`. They can also be used to house complex logic for `components` such as `tables`.

```js

/**
 * While not used in this examples, the hook can be initialised with params.
 * To avoid re-processing data on each re-render (If data processing is done), useMemo can be useful.
 */
const Hook = ({..params}) => { 
    const dispatch = useDispatch(); // Required for redux actions

    // Retrieve user data
    const { name, email } = useSelector(selectCurrentUser) // selectCurrentUser = import from selector

    // PERMISSION CHECK
    // use enums, probably should rename 'loading' to 'rolesLoading' to avoid conflicts
    const {isPermitted, loading: rolesLoading} = checkRoles([ADMIN]);

    // DATA STATE
    // Note that some data has multiple loading and error states, this should be accounted for
    const data = useSelector(selectData);
    const dataLoading = useSelector(selectDataLoading);
    const dataError = useSelector(selectDataError);

    // SUBSCRIBE TO DATA
    useEffect(()=>{
        // This dispatches a subscribe then unsubscribe on first render
        dispatch(actions.subscribe()) // Can import all actions as actions (import { * as actions} from '@/redux/data/actions.js')

        return ()=> {
            dispatch(actions.unsubscribe());
        }
    },[])

    // DEFINE ACTIONS
    // useCallback to ensure fresh data
    const submitData = useCallback((newData) => {
        // API or epic can handle missing params and write them via the reducer to dataError
        dispatch(actions.writeData(newData, email)
        }),[email])

    return {
        data,
        loading: dataLoading || rolesLoading, // This can also be done like {data:dataLoading, roles:rolesLoading}
        error: dataError // Similarly, can break down the error if relevant
        submitData
    }

}

export default Hook;
```
