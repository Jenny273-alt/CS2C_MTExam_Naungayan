let favoriteColors = []; // empty array

let newColor;

while (true) {
  newColor = prompt("Enter a favorite color (or type 'done' to finish):");

  if (newColor.toLowerCase() === "done") {
    break; // Exit the loop if the user types "done"
  }

  favoriteColors.push(newColor); // Add the new color to the array

  console.log("Your favorite colors are:", favoriteColors); // Print the updated array
}