var cursor = document.getElementsByClassName("kix-cursor")[0]
var cursor_style = cursor.getAttribute("style");

// initial setting
cursor.setAttribute('style', cursor_style + " transition: all 80ms ease;");

chrome.runtime.onMessage.addListener(function(request) {
    if (request.action == "change_cursor") {
        cursor.style.transitionDuration = request.animationTime + "ms";
    }
})