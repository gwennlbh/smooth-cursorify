const slider = document.getElementById("slider")
const speedIndicator = document.getElementById("speedIndicator")
const init = async () => {
    let response = await chrome.storage.sync.get(['animationTime']);
    const val = response.animationTime ? response.animationTime : 80
    speedIndicator.innerHTML = val + "ms";
    slider.value = val;
}
init()

slider.addEventListener("change", async () =>{
    speedIndicator.innerHTML = slider.value + "ms"
    await chrome.storage.sync.set({ animationTime: slider.value });

    chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {action: "change_cursor", animationTime: slider.value})
    })
})