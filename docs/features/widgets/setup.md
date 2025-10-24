---
id: setup
title: Set Up
sidebar_label: Set Up
sidebar_position: 3
last_update:
  date: 2025/10/24
  author: Ijaan Yudana
---

So you want to make your own widget? This is a tutorial on how to set a new widget up.

We will assume that have a widget that has 3 views, INDEX_A, INDEX_B, and DETAIL_A. Each will have a page with more detail. We also want to change the subtitle based on what is being shown. It should also have width and scroll detection.

## Adding a file

First add a new file and folder under the `Widgets` directory.

```js
>'Widgets' (folder)
>>'Example' (folder) + NEW!!
>>>'ExampleWidget.js' (file) + NEW!!
```

## Basic Template

```js
//Imports

const VIEWS = {
  INDEX_A: {
    value: "INDEX_A",
    label: "All INDEX_A items",
    url: ROUTE_INDEX_A(),
  },
  INDEX_B: {
    value: "INDEX_B",
    label: "All INDEX_B items",
    url: ROUTE_INDEX_B(),
  },
  DETAIL_A: {
    value: "DETAIL_A",
    label: "INDEX_A item detail",
    url: (itemId) => ROUTE_DETAIL_A(itemId),
  },
};

const Layout = ({ view, itemId, handleUserSelect }) =>{
    const ref = useRef(null);
    useWidgetDetection(ref, []);
    const { width } = useWidgetProperties();

    return (
        <Box ref={ref} sx={{overflowY:'auto', height:'100%'}}> {/** Sets scrollable area with width detection*/}

            { view == VIEWS.INDEX_A.value && (
            <ComponentA width={width} onUserSelect={handleUserSelect} />
            )}

            { view == VIEWS.INDEX_B.value && <ComponentB width={width} /> }

            { view == VIEWS.DETAIL_A.value && itemId && (
                <ComponentC itemId={itemId} width={width} />
            )}
        </Box>
    )
}

const ExampleWidget = () => {
  // SaveDataPersistent stores to local storage
  const { data, saveDataPersistent } = useWidgetData();
  const selectedView = data?.selectedView || VIEWS.INDEX_A.value;

  // Update subtitle when in detail view
  useEffect(() => {
    if (selectedView === VIEWS.DETAIL_A.value && data?.itemName) {
      saveDataPersistent("customSubTitle", data.itemName);
    } else {
      saveDataPersistent("customSubTitle", "");
    }
  }, [selectedView, data?.itemName]);

  const handleUserSelect = (id, name) => {
    saveDataPersistent("selectedView", VIEWS.DETAIL_A.value);
    saveDataPersistent("itemId", id);
    saveDataPersistent("itemName", name);
  };

  return (
    <Layout
        view={selectedView}
        handleUserSelect={handleUserSelect}
        itemId={data?.itemId}
    >
  )
};

export default ExampleWidget;
```

## Config

```js
 import ExampleWidget, {VIEWS as EXAMPLE_VIEWS} from '../widgets/ExampleWidget

{
    id:'example',
    title:'Example',
    category: 'General',
    enabled: 'true',
    minW: 5,
    minH: 5,
    isUnique:true,
    component: <ExampleWidget />,
    rbac:[],
    actions: [
        {
            type: 'url',
            key: 'example-page',
            label: 'View Page',
            //Retrieves the url based on the current view
            url: (data) => getViewByValue(data?.selectedView, EXAMPLE_VIEWS, EXAMPLE_VIEWS.INDEX_A).url,
            icon: <Group />,
            rbac: [],
            desc: `Go to example page`,
        },
        {
            type: 'divider'
        },
        {
            type: 'view',
            key: 'view-index_a',
            label: EXAMPLE_VIEWS.INDEX_A.label,
            value: EXAMPLE_VIEWS.INDEX_A.value,
            desc: 'See INDEX_A',
        }
        {
            type: 'view',
            key: 'view-index_b',
            label: EXAMPLE_VIEWS.INDEX_B.label,
            value: EXAMPLE_VIEWS.INDEX_B.value,
            desc: 'See INDEX_B',
        }
    ]
}
```

## End

And there you have it, the template of a basic widget with multiple views, a changing title, and width + scroll detection.

