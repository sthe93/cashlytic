document.getElementById("year").textContent = new Date().getFullYear();

// Re-render Facebook plugin after layout is ready (prevents tiny embed)
window.addEventListener("load", () => {
  if (window.FB && FB.XFBML) {
    FB.XFBML.parse();
  }
});