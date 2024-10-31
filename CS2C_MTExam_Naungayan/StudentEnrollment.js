// Arrays to store students in each subject
let dsaStudents = [];
let plStudents = [];
let networksStudents = [];

function chooseSubject() {
  let subject = prompt("Choose subject (DSA, PL, Networks):").toLowerCase();
  if (subject === "dsa") {
    chooseAction(dsaStudents);
  } else if (subject === "pl") {
    chooseAction(plStudents);
  } else if (subject === "networks") {
    chooseAction(networksStudents);
  } else {
    console.log("Invalid subject. Please try again.");
    chooseSubject();
  }
}

// Function to let the user choose an action for the selected subject
function chooseAction(subjectArray) {
  let action = prompt("Choose action (enroll, unenroll, exit):").toLowerCase();
  if (action === "enroll") {
    enrollStudent(subjectArray);
  } else if (action === "unenroll") {
    unenrollStudent(subjectArray);
  } else if (action === "exit") {
    showResults(); // Show final results and exit
  } else {
    console.log("Invalid action. Please try again.");
    chooseAction(subjectArray);
  }
}

// Function to enroll a student in the selected subject
function enrollStudent(subjectArray) {
  let studentName = prompt("Enter student name:");
  subjectArray.push(studentName); 
  console.log(studentName + " enrolled.");
  chooseAction(subjectArray);
}

// Function to unenroll a student from the selected subject
function unenrollStudent(subjectArray) {
  if (subjectArray.length === 0) {
    console.log("No students to unenroll.");
    chooseAction(subjectArray); 
    return;
  }
  let studentName = prompt("Enter student name to unenroll:");
  let index = subjectArray.indexOf(studentName); 
  if (index > -1) {
    subjectArray.splice(index, 1); 
    console.log(studentName + " unenrolled.");
  } else {
    console.log(studentName + " not found.");
  }
  chooseAction(subjectArray); 
}

// Function to display the final results
function showResults() {
  console.log("\nFinal Enrollment:");
  console.log("DSA:", dsaStudents);
  console.log("PL:", plStudents);
  console.log("Networks:", networksStudents);
}

// Start the program by calling the chooseSubject function
chooseSubject();