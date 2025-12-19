function changeColor(color) {
  document.documentElement.style.setProperty("--main-color", color);
  document.documentElement.style.setProperty(
    "--nav-color",
    color.replace("0.5", "0.7"),
  );
}

/*Der Code ändert im grunde einfach die farbe der Webseite. Die Funktion changeColor ändert die hauptfarbe der Website über eine Cssvariable. gleichzeitig macht sie die Navigations farbe etwas dunkler, indem der "durchsichtigskeitwert" erhöht wird.*/
