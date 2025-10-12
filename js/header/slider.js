document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("slider");
  if (!container) {
    return;
  }

  let data;
  try {
    const response = await fetch("js/header/slider.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    data = await response.json();
  } catch (err) {
    return;
  }

  const track = document.createElement("div");
  track.className = "slider-track";
  container.appendChild(track);

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
    track.appendChild(slide);
  });

  const clone = track.cloneNode(true);
  track.appendChild(clone);

  let pos = 0;
  const speed = 1;
  function animate() {
    pos -= speed;
    if (Math.abs(pos) >= track.scrollWidth / 2) pos = 0;
    track.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
