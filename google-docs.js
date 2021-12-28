var cursor = document.getElementsByClassName("kix-cursor")[0]
var cursor_style = cursor.getAttribute("style");

// initial setting
chrome.storage.sync.get(['animationTime']).then(response => {
    const val = response.animationTime ? response.animationTime : 80
    cursor.setAttribute('style', cursor_style + " transition: all " + val + "ms ease;");
})

chrome.runtime.onMessage.addListener(function(request) {
    if (request.action == "change_cursor") {
        cursor.style.transitionDuration = request.animationTime + "ms";
    }
})
