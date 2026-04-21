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

const TAG_COLOURS = {
  "nlp":              "#4a6670",
  "semantics":        "#7a6a58",
  "probing":          "#5a6b4f",
  "memory":           "#6b5a70",
  "behavioural":      "#70604a",
  "clinical":         "#4a6660",
  "psycholinguistics":"#6a5a48",
  "perception":       "#4f5f6b",
};

const DEFAULT_COLOURS = ["#7a6a58","#4a6670","#5a6b4f","#6b5a70","#70604a","#4a6660"];

document.querySelectorAll(".tag").forEach((tag, i) => {
  const key = tag.textContent.trim().toLowerCase();
  tag.style.backgroundColor = TAG_COLOURS[key] ?? DEFAULT_COLOURS[i % DEFAULT_COLOURS.length];
});
