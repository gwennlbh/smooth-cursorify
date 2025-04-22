/**
 *
 * Add your selectors here!
 * How to:
 * - "your selector" for a selector that will be applied on all sites
 * - ["your selector", "example.com"] for a selector that will be applied only on example.com. Useful if your selector is not that specific and could create weird effects on other sites.
 */

declareStyles([
  // Monaco: Leetcode, and probably others
  ".monaco-editor .cursor",
  // Codemirror: Typst, Codepen
  ".cm-cursorLayer .cm-cursor",
  ".cm-cursorLayer .cm-fat-cursor", // Vim normal mode cursor
  ".CodeMirror-cursors .CodeMirror-cursor",
  // Kix: Google Docs
  [".kix-cursor", "docs.google.com"],
  // ACE: Overleaf
  ".ace_cursor_layer .ace_cursor",
])

function declareStyles(selectors) {
  console.log("SmoothCursorify: Adding styles...", selectors)
  // Find smooth cursorify style tag
  let style = document.head.querySelector(
    'style[data-extension="smoothcursorify"]'
  )

  // Create it if it doesn't exist
  if (!style) {
    style = document.createElement("style")
    style.dataset.extension = "smoothcursorify"
    document.head.appendChild(style)
  }

  for (let selector of selectors) {
    // Handle scoped selectors
    if (Array.isArray(selector)) {
      selector = selector[0]
      if (new URL(window.location.href).hostname !== selector[1]) {
        continue
      }
    }

    style.appendChild(
      document.createTextNode(
        `${selector} { transition: all 80ms ease !important }`
      )
    )
  }
}
