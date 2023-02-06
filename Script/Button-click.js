// var button = document.getElementById('button');

// button.onclick = function() {
//     var div = document.getElementsByClassName('invisible');
//     if (div.invisible.display !== 'none') {
//         div.invisible.display = 'none';
//     }
//     else {
//         div.invisible.display = 'block';
//     }
// };

// i want to Hide or show all elements with class "invisible" when button is clicked


// Get a reference to the button
const button = document.querySelector("button");

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

