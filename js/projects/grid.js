document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("grid");
  if (!container) {
    return;
  }

  let data;
  try {
    const response = await fetch("js/projects/grid.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    data = await response.json();
  } catch (err) {
    return;
  }

  data.forEach((item, i) => {
    const slide = document.createElement("div");
    slide.className = "slide";

    const img = document.createElement("img");
    img.src = item.filename;
    img.alt = item.title || `Slide ${i + 1}`;

    const label = document.createElement("span");
    label.textContent = item.title || "";

    slide.appendChild(img);
    slide.appendChild(label);
    container.appendChild(slide);
  });
});
