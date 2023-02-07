// Get a reference to the button
const button = document.querySelector("#button");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Get all the div elements with the class "invisible" or "welcome"
	const divs = document.querySelectorAll(".invisible, .welcome");

  // Loop through each div and toggle its visibility
	divs.forEach(function(div) {
    if (div.style.display === "none") {
		div.style.display = "block";
    } else {
		div.style.display = "none";
    }
	});
});


// overlay statistik

const statisticsAnchor = document.querySelector(".statistics");

statisticsAnchor.addEventListener("click", function() {

// styla overlay
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";

  // Create the content element
  const content = document.createElement("div");
  content.style.backgroundColor = "#fff";
  content.style.padding = "20px";
  content.style.borderRadius = "10px";
  content.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  content.style.width = "90vw";
  content.style.height = "90vh";
  content.style.zIndex = "30";
  content.textContent = "Statistik";

  // Append the content to the overlay
  overlay.appendChild(content);

  // Append the overlay to the body
  document.body.appendChild(overlay);
});
