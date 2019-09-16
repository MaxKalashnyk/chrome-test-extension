chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.windows.create({
    url: chrome.runtime.getURL("popup.html"),
    type: "popup"
  }, function(win) {
	  console.log("win", win)
    // win represents the Window object from windows API
    // Do something after opening
  });
});