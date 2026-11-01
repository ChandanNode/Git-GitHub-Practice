const user = {
  id: 101,
  name: "Chandan Kumar",
  age: 19,
  role: "developer",
  city: "Patna",
  country: "India",
  skills: ["JavaScript", "Node.js", "C++"], // New field
  status: "active"                         // New field
};

console.log("Updated User Details:", user);
console.log("User Skills:", user.skills.join(", "));