var carets = document.querySelectorAll('.ace_cursor-layer .ace_cursor')
console.info(`[smooth-cursorify] Got cursor elements: ${JSON.stringify(carets)}`)
var curCount = 0
carets.forEach((caret) => {
  var caret_styles = caret.getAttribute("style")
  caret.setAttribute("style", caret_styles + " transition: all 80ms;")
  curCount++
})
console.info(`[smooth-cursorify] Applied styles to ${curCount} cursor(s)`)
