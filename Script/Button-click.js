// skapa referens till knappen
const button = document.querySelector("#button");

// lägg till en eventlistener för att klicka på knappen

button.addEventListener("click", function() {

// välj alla divar med stil invisible eller welcome

	const divs = document.querySelectorAll(".invisible, .welcome");
console.log('click',divs)
// Dölj visa div

	divs.forEach(function(div) {
    /* if (div.invisible === "none") {
		div.style.display = "block";
    } else {
		div.style.display = "none";
    } */


	div.classList.toggle('invisible')
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
	content.style.backgroundColor = "#ffffff";
	content.style.padding = "20px";
	content.style.borderRadius = "10px";
	content.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
	content.style.width = "90vw";
	content.style.height = "90vh";
	content.style.zIndex = "30";
	content.textContent = "Statistik";

// Skapa / Styla table, row, header, data

	const table = document.createElement("table");
	table.style.borderWidth = "2px";
	table.style.borderStyle = "solid";
	table.style.borderColor = "#000000";
	table.style.alignItems = "center";


	const row = document.createElement("tr");
	// row.style.borderWidth = "2px";
	// row.style.borderStyle = "solid";
	// row.style.borderColor = "#000000";

	const header = document.createElement("th");
	// header.style.borderWidth = "2px";
	// header.style.borderStyle = "solid";
	// header.style.borderColor = "#000000";
	header.textContent = "Namn";

	// const header = document.createElement("th");
	// // header.style.borderWidth = "2px";
	// // header.style.borderStyle = "solid";
	// // header.style.borderColor = "#000000";
	// header.textContent = "Poäng";


	const data = document.createElement("th");
	data.style.borderWidth = "2px";
	data.style.borderStyle = "solid";
	data.style.borderColor = "#000000";



// Append the content to the overlay
	overlay.appendChild(content);

// Append the overlay to the body
	document.body.appendChild(overlay);

// Append the table to the overlay
	content.appendChild(table);

// Append the table row to the table
    table.appendChild(row);

// Append the table header to the table row
    row.appendChild(header);

// Append the table data to the table row
    row.appendChild(data);

	overlay.addEventListener("click", function(event) {
    if (event.target === overlay) {
    overlay.remove();
    }
});

});