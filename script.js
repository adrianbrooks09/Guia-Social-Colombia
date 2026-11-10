// Guia Social Colombia: small helpers only. Content is plain HTML.
document.addEventListener("DOMContentLoaded", function () {
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Highlight the current page in the top navigation.
  var path = window.location.pathname;
  document.querySelectorAll("nav.main a").forEach(function (link) {
    var href = link.getAttribute("href");
    var page = href.split("/").pop();
    if ((path === "/" || path.endsWith("index.html")) && page === "index.html") {
      link.classList.add("active");
    } else if (page !== "index.html" && path.endsWith(page)) {
      link.classList.add("active");
    }
  });
});
