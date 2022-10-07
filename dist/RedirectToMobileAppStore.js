import React from "react";
const DEVICES = {
  ANDROID: "ANDROID",
  IOS: "IOS",
  UNKNOWN: "UNKNOWN"
};
export const RedirectToMobileAppStore = ({
  appStoreLink,
  playStoreLink,
  autoRedirect,
  mainDivStyle,
  listItemStyle,
  anchorLinkStyle,
  unOrderedListStyle
}) => {
  const linkToRedirect = getLinkToRedirectTo(appStoreLink, playStoreLink);
  if (autoRedirect && linkToRedirect) window.location.href = linkToRedirect;
  return /*#__PURE__*/React.createElement("div", {
    style: mainDivStyle
  }, linkToRedirect ? /*#__PURE__*/React.createElement("a", {
    style: anchorLinkStyle,
    href: linkToRedirect
  }, "Download") : /*#__PURE__*/React.createElement("ul", {
    style: unOrderedListStyle
  }, /*#__PURE__*/React.createElement("li", {
    style: listItemStyle
  }, /*#__PURE__*/React.createElement("a", {
    style: anchorLinkStyle,
    href: appStoreLink
  }, "Download for IOS / Apple Devices", " ")), /*#__PURE__*/React.createElement("li", {
    style: listItemStyle
  }, /*#__PURE__*/React.createElement("a", {
    style: anchorLinkStyle,
    href: playStoreLink
  }, "Download for Android Devices", " "))));
};

function getLinkToRedirectTo(appStoreLink, playStoreLink, defaultLink) {
  const device = getMobileOperatingSystem();
  if (device === DEVICES.ANDROID) return playStoreLink;else if (device === DEVICES.IOS) return appStoreLink;
}

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) return DEVICES.ANDROID;
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return DEVICES.IOS;
  return DEVICES.UNKNOWN;
}