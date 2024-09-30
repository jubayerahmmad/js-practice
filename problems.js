const polapains = [
  { name: "Nicolas JACKson", job: "govt", salary: "21000" },
  { name: "Bryan Mbeumo", job: "nongovt", salary: "30000" },
  { name: "Antony GOAT", job: "govt", salary: "18000" },
  { name: "Reece James", job: "nongovt", salary: "30000" },
  { name: "Erling Khaaland", job: "govt", salary: "35000" },
  { name: "Tyyyrrooone Mings", job: "nongovt", salary: "41000" },
  { name: "Bruno Fernansh", job: "govt", salary: "17000" },
  { name: "Khulian Alvarez", job: "nongovt", salary: "47000" },
  { name: "Sean Dyche", job: "govt", salary: "20000" },
];

// function findPolaa() {
//   for (let pola of polapains) {
//     if (
//       (pola.job === "govt" && pola.salary >= "25000") ||
//       (pola.job === "nongovt" && pola.salary >= "35000")
//     ) {
//       console.log(pola.name, "Youre Selected");
//     }
//   }
// }
// findPolaa(polapains.name);

// const polaaaa = polapains.filter(
//   (pola) =>
//     (pola.job === "govt" && pola.salary >= "25000") ||
//     (pola.job === "nongovt" && pola.salary >= "35000")
// );
// const names = polaaaa.map((name) => name.name);
// console.log(names);

const findPolaa = (polapains) => {
  const polaa = polapains.filter((pola) => pola.job === "govt");
  const names = polaa.map((name) => name.name);
  return names;
};

const hola = findPolaa(polapains);
console.log(hola);

const students = [
  { name: "pessi", avgMarks: 55, isFinished: true },
  { name: "naimur", avgMarks: 48, isFinished: true },
  { name: "penaldo", avgMarks: 46, isFinished: true },
  { name: "ter statue", avgMarks: 40, isFinished: false },
  { name: "goat entony", avgMarks: 42, isFinished: true },
  { name: "mikailo mudryk", avgMarks: 39, isFinished: false },
];

// function findSCIC() {
//   for (let student of students) {
//     if (student.avgMarks >= 46 && student.isFinished) {
//       console.log(student.name, "is eligible for SCIC");
//     }
//   }
// }
// findSCIC();

// const scic = students.filter(
//   (person) => person.avgMarks >= 46 && person.isFinished === true
// );
// console.log(scic);

const findSCIC = (students) => {
  const scic = students.filter(
    (person) => person.avgMarks >= 46 && person.isFinished
  );
  const names = scic.map((name) => name.name);
  return names;
};
const result = findSCIC(students);
console.log(result);
