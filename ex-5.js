const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(accumulate, students) {
  // Start coding here
  return accumulate+students.score
}
console.log(students.reduce(getAverageStudentScore,0)/students.length); // Output: 87.5
