---
id: sp-page
title: Page
sidebar_label: Page
sidebar_position: 2
last_update:
  date: 2026/03/30
  author: Ijaan Yudana
---

The Page is responsible for rendering the contents of a page and arranging the `Layout`. The following is a flow chart for a standard page:

```js

/**
 * Receives props from the container (When it is passed to the container in Index)
 */
const Layout = ({prop1, prop2, prop3, prop4}) => {
    // Business logic here i.e

    const rows = prop5.filter(/** Some filter algorithm */).sort(/** Some sorting algorithm */)

    const doTableRowInteraction = ({paramA}) => {
        goToPage(paramA);
    } 
    
    // You can also make a function in the hook and pass it via the container
    // This is preferred for functions that interact with features beyond the UI 
    // i.e submitDataToFirestore. 
    // Functions defined here should only apply to elements in the Layout and its child components.

    return (
        {/** Whatever needs to be rendered as contents */}
        <Box>

            {/** These components could be imported or written above the Layout component */}
            <SomeHeaderComponent {...{prop1, prop2}} />

            <SomeTableComponent {...{prop3, prop4, rows, doTableRowInteraction}} />
        </Box>
    )
}

/**
 * "Index" can be replaced with whatever the file name is i.e Detail
 */
const Index = () => {

    // URL parsing can be done here

    // Role checking can be done here, but is preferred to be done in the container

    const breadcrumbs = [{label:string, href: IMPORT_FROM_ROUTES_JS()},...]

    const Props = {
        // Variables that have to be sent to the container should be here
        prop1,
        prop2
    }
    return (
        <App> {/** Can also be <Box/> */}

        {/** These templates will format to the correct spacing / font size for the pages */}
            <TemplatePageTitle
                title={string}
                breadcrumbs={breadcrumbs}
                action={action}
            />

            <TemplateMain>
                {/** Container will handle the load state and errors */}
                <Container Layout={Layout} Props={Props}>
                {/**
                    Some pages may use multiple layouts requiring multiple containers.
                    That could be defined here (Or in the Layout)

                    i.e 
                    {tab === 1 && <ContainerA Layout={LayoutA} />}
                    {tab === 2 && <ContainerB Layout={LayoutB} />} 
                    or even
                    {tab === 3 && <ContainerB Layout={LayoutA} />} 

                    Note: This would require the pre-requisite business logic i.e tabs.
                    ---

                    if defined in Layout you could do

                    <Layout tab={tab} />
                    
                */}
            </TemplateMain>
        </App>
    )
}

export default Index;
```
