import React from "react";

const DEVICES = {
  ANDROID: "ANDROID",
  IOS: "IOS",
  UNKNOWN: "UNKNOWN",
};

export const RedirectToMobileAppStore = ({
  appStoreLink,
  playStoreLink,
  defaultLink,
  autoRedirect,
}) => {
  const defaultLinkValue = defaultLink ? defaultLink : playStoreLink;
  const linkToRedirect = getLinkToRedirectTo(
    appStoreLink,
    playStoreLink,
    defaultLinkValue
  );
  if (autoRedirect) window.location.href = linkToRedirect;
  return (
    <div>
      <a href={linkToRedirect}>Download</a>
    </div>
  );
};

function getLinkToRedirectTo(appStoreLink, playStoreLink, defaultLink) {
  const device = getMobileOperatingSystem();
  if (device === DEVICES.ANDROID) return playStoreLink;
  else if (device === DEVICES.IOS) return appStoreLink;
  return defaultLink;
}

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) return DEVICES.ANDROID;

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
    return DEVICES.IOS;

  return DEVICES.UNKNOWN;
}
