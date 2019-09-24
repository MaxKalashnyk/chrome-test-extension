chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.windows.create(
        {
            url: chrome.runtime.getURL("popup.html"),
            type: "popup",
            width: 300,
            height: 500,
            top: 0,
            left: 0
        },
        function(win) {
            console.log("win", win);
            // win represents the Window object from windows API
            // Do something after opening
        }
    );
});
