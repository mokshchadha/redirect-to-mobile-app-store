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
  mainDivStyle,
  listItemStyle,
  anchorLinkStyle,
  unOrderedListStyle,
}) => {
  const linkToRedirect = getLinkToRedirectTo(appStoreLink, playStoreLink);

  if (autoRedirect && linkToRedirect) window.location.href = linkToRedirect;
  return (
    <div style={mainDivStyle}>
      {linkToRedirect ? (
        <a style={anchorLinkStyle} href={linkToRedirect}>
          Download
        </a>
      ) : (
        <ul style={unOrderedListStyle}>
          <li style={listItemStyle}>
            <a style={anchorLinkStyle} href={appStoreLink}>
              Download for IOS / Apple Devices{" "}
            </a>
          </li>
          <li style={listItemStyle}>
            <a style={anchorLinkStyle} href={playStoreLink}>
              Download for Android Devices{" "}
            </a>
          </li>
        </ul>
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
