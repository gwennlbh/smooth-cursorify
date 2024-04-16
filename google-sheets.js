var targetElements = document.getElementsByClassName("active-cell-border");

for (var i = 0; i < targetElements.length; i++) {
  var element = targetElements[i];
  if (element.classList.contains("active-cell-border")) {
    var parent = element.parentElement;

    while (parent) {
      parent.style.transition = "all 80ms";
      parent = parent.parentElement;
    }
  }
}
