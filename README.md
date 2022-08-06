<p align="center">
    <img src="./logotype.png" alt="SmoothCursorify" height="150px">
    <p align="center">Apply a Microsoft Word-like smooth caret animation to multiple online editors.</p>
    <p align="center"><a href="https://addons.mozilla.org/fr/firefox/addon/smooth-cursorify/">Firefox</a>&nbsp;&bull;&nbsp;<a href="https://chrome.google.com/webstore/detail/smooth-cursorify/ohhjfajndpfpbimipmehmdkblnbelaec?hl=fr&authuser=0">Chrome</a>&nbsp;&bull;&nbsp;<a href="https://www.youtube.com/watch?v=35It5ijWl_0">Demo video</a></p>
</p>
  
## Supported websites
> Please open an issue to request a new website

* Google Docs (https://docs.google.com/)
* Overleaf (https://www.overleaf.com/)

## How does it work?

Some websites use custom rendering engines to edit rich text, instead of relying on `contenteditable` or using a plain `<textarea>`/`<input>`. When using such custom methods, the cursor is not the native one, and is instead an HTML element, that can be stylized like any other. For example, Google Docs uses a 2-pixels-wide div with a black background to render its cursor.

Since those cursors are plain HTML elements, they can be **stylized**, that's where this extension comes in.

The process is simple:

1. Find the element
2. Append `transition: all 80ms` to its style tag

The problem with this is that methods using the native cursor can't really have them applied: we _can't_ access the system cursor to style it with CSS.


## Manual installation
If you want to install this extension manually:

1. Download this repository
2. Load the extension
  * On Firefox:
    1. Open <about:debugging>
    2. Click "This Firefox"
    3. Click "Load temporary addon"
    4. Navigate to the repository's folder and select the `manifest.json` file.
  * On Chrome: 
    1. Open <chrome://extensions>
    2. Toggle on "Developer mode"
    3. Click "Load unpacked extension"
    4. Select the repository's folder
