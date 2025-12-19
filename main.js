function changeColor(color) {
  document.documentElement.style.setProperty("--main-color", color);
  document.documentElement.style.setProperty(
    "--nav-color",
    color.replace("0.5", "0.7"),
  );
}
