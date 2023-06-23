
// Array of student objects
const students = [
  { name: "John", chemistry: 85, biology: 90, dob: "10-07-2000" },
  { name: "Sarah", chemistry: 90, biology: 80, dob: "15-03-2001" },
  { name: "Michael", chemistry: 80, biology: 85, dob: "05-12-2000" },
  // Add more student objects here
];

// Sorting function based on the given rules
function sortStudents(students) {
  students.sort((a, b) => {
    // Rule 1: Sort by total marks (descending order)
    if (a.chemistry + a.biology > b.chemistry + b.biology) {
      return -1;
    } else if (a.chemistry + a.biology < b.chemistry + b.biology) {
      return 1;
    }

    // Rule 2: Sort by biology marks (descending order)
    if (a.biology > b.biology) {
      return -1;
    } else if (a.biology < b.biology) {
      return 1;
    }

    // Rule 3: Sort by date of birth (ascending order)
    const [aDay, aMonth, aYear] = a.dob.split("-");
    const [bDay, bMonth, bYear] = b.dob.split("-");

    const aDate = new Date(`${aMonth}-${aDay}-${aYear}`);
    const bDate = new Date(`${bMonth}-${bDay}-${bYear}`);

    if (aDate < bDate) {
      return -1;
    } else if (aDate > bDate) {
      return 1;
    }

    return 0; // If all conditions are equal, maintain the current order
  });

  return students;
}

// Testing the sorting function
const sortedStudents = sortStudents(students);
console.log(sortedStudents);

