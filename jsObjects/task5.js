const users = [
  {
    name: "Darina",
    email: "darina99@example.com",
    age: 35
  },
  {
    name: "Dmytro",
    email: "dmytro77@example.com",
    age: 42
  },
  {
    name: "Anna",
    email: "anna55@example.com",
    age: 24
  }
];

for (const { name, email, age } of users) {
  console.log(name)
  console.log(email)
  console.log(age)
}