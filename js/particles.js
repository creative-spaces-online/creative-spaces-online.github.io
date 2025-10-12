document.addEventListener("DOMContentLoaded", () => {
  fetch("js/particles.json")
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load particles.json: ${response.status}`);
      return response.json();
    })
    .then(config => {
      if (typeof particlesJS === "undefined") {
        console.error("particles.min.js not loaded or missing global 'particlesJS'");
        return;
      }
      particlesJS("particles-js", config);
    })
    .catch(err => console.error("Particles initialization failed:", err));
});
