// Highlight the nav link that matches the current page
document.addEventListener("DOMContentLoaded", () => {
  const path = location.pathname.replace(/\/$/, "") || "/index.html";
  document.querySelectorAll("nav a").forEach(link => {
    const href = link.getAttribute("href").replace(/^\.\//, "");
    if (
      path.endsWith(href) ||
      (href === "index.html" && (path === "" || path.endsWith("/")))
    ) {
      link.classList.add("active");
    }
  });
});
