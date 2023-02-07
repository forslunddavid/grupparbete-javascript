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

const statistics = document.querySelector(".statistics");

statistics.addEventListener("click", function() {

// skapa / styla overlay
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

  // skapa / styla på content
	const content = document.createElement("section");
	content.style.backgroundColor = "#fff";
	content.style.padding = "20px";
	content.style.borderRadius = "10px";
	content.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
	content.style.width = "90vw";
	content.style.height = "90vh";
	content.style.zIndex = "30";
	content.textContent = "Statistik";

	const table = document.createElement("table");

	const row = document.createElement("tr");


// Append the content to the overlay
	overlay.appendChild(content);

// Append the overlay to the body
	document.body.appendChild(overlay);

// Append the table to the overlay
	content.appendChild(table);

// Append the table row to the table
    table.appendChild(row);

//Append the table header to the table row
    row.appendChild(document.createElement("th"));

// Append the table data to the table row
    row.appendChild(document.createElement("td"));

	overlay.addEventListener("click", function(event) {
    if (event.target === overlay) {
    overlay.remove();
    }
});

});