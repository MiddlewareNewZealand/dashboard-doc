---
id: styling
title: Styling
sidebar_label: Styling
sidebar_position: 1
last_update:
  date: 07/10/2025
  author: Ijaan Yudana
---

# Overview

The styling of the app is done entirely via material UI. There are 3 main methods to style components: `theme.js`, `styledComponents.js` and using the `sx` prop. The goal with this system is to keep the styling as consistent as possible, while keeping it simple and modifiable.

## Theme

Theme.js is used to establish palette values, and default appearances for various components. You can add styling to a component via adding something like the following to the components key.

```js
Mui{COMPONENT_NAME}:{
  styleOverrides:{
    {specificity e.g root}: ({theme}) => ({ // use this syntax to use theme.palette values
      // sx styling here
    })
  }
}

//e.g

MuiCard:{
  styledOverrides:{
    root:({theme}) => ({
      color:theme.palette.primary.main
    })
  }
}
```

Using themes allows for consistent universal styling while keeping a simple naming structure e.g

```jsx
<StyledList>
  <StyledListItem>
    {/**etc...*/}
  </StyledListItem>
</StyledList>

//vs

<List>
  <ListItem>
    {/**etc...*/}
  </ListItem>
</List>
```

## styledComponents

Styled components are default styling for common exceptions to the theme, especially components that require dynamic styling.

```jsx
<InteractiveListItem>{/** Content */}</InteractiveListItem>
```

While this could be done in the theme (allowing for a prop to be passed to add this functionality) It would be the theme very complicated and hard to edit/parse. This method keeps it the code simple and obvious when an exception is made.

## sx

Sx should be used for unique or uncommon exceptions, in particular margins, padding, etc.

```jsx
<Button sx={{ p: 2 }}></Button>
```

## Notes

:::info
Always use theme colour values instead of raw hex code e.g

```js
theme.palette.primary.main vs '#7F7F7F'
```

However there is convenient shorthand for palette values

```js
'primary.main' vs theme.palette.primary.main
```

:::