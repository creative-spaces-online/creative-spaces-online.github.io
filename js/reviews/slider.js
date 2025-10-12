document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("reviews");
  if (!container) return;

  let data;
  try {
    const response = await fetch("js/reviews/reviews.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    data = await response.json();
  } catch (err) {
    console.error("Failed to load reviews:", err);
    return;
  }

  container.innerHTML = "";

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "review-card";

    const text = document.createElement("p");
    text.className = "review-text";
    text.textContent = item.text;

    const footer = document.createElement("div");
    footer.className = "review-footer";

    const name = document.createElement("span");
    name.className = "review-name";
    name.textContent = item.name;

    const city = document.createElement("span");
    city.className = "review-city";
    city.textContent = item.location;

    footer.appendChild(name);
    footer.appendChild(city);

    card.appendChild(text);
    card.appendChild(footer);
    container.appendChild(card);
  });
});
