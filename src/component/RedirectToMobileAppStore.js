import React from "react";

const DEVICES = {
  ANDROID: "ANDROID",
  IOS: "IOS",
  UNKNOWN: "UNKNOWN",
};

export const RedirectToMobileAppStore = ({
  appStoreLink,
  playStoreLink,

  autoRedirect,
}) => {
  const linkToRedirect = getLinkToRedirectTo(appStoreLink, playStoreLink);

  if (autoRedirect && linkToRedirect) window.location.href = linkToRedirect;
  return (
    <div>
      {linkToRedirect ? (
        <a href={linkToRedirect}>Download</a>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <ul>
            <li>
              <a href={appStoreLink}>Download for IOS / Apple Devices </a>
            </li>
            <li>
              <a href={playStoreLink}>Download for Android Devices </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

function getLinkToRedirectTo(appStoreLink, playStoreLink, defaultLink) {
  const device = getMobileOperatingSystem();
  if (device === DEVICES.ANDROID) return playStoreLink;
  else if (device === DEVICES.IOS) return appStoreLink;
}

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) return DEVICES.ANDROID;

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
    return DEVICES.IOS;

  return DEVICES.UNKNOWN;
}
