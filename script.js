window.addEventListener("load", () => {
  const widget = document.querySelector(".pinterest-widget");
  widget.style.opacity = "0";
  widget.style.transition = "opacity 0.6s ease-in-out";
  setTimeout(() => {
    widget.style.opacity = "1";
  }, 500);
});

