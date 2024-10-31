let age = 20; 

let ageCategory = "";

if (age < 5) {
  ageCategory = "Toddler";
} else if (age < 13) {
  ageCategory = "Child";
} else if (age < 20) {
  ageCategory = "Teenager";
} else if (age < 36) {
  ageCategory = "Young Adult";
} else if (age < 61) {
  ageCategory = "Middle-Aged";
} else {
  ageCategory = "Senior";
}

console.log(`The user is a ${ageCategory}.`);