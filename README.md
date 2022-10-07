# Getting Started with redirect-to-mobile-app-store

## Quick start

```
 <RedirectToMobileAppStore
          appStoreLink={"https://link1"}
          playStoreLink={"https://link2"}
          autoRedirect={true}
        />
```

autoRedirect will not wait for you to click on the link

#### How to apply custom style

```


export const RedirectToMobileAppStore = ({
  appStoreLink,
  playStoreLink,
  autoRedirect,
  mainDivStyle,
  listItemStyle,
  anchorLinkStyle,
  unOrderedListStyle,
}) => {
  ....
};


```
