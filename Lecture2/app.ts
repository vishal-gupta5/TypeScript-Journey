// Object, Array, Tuple, Enum

// Objects
const person: {
  firstName: string;
  lastName: string;
  age: number;
  xyz: {
    address: string;
  };
  skills: string[];
} = {
  firstName: "Vishal",
  lastName: "Gupta",
  age: 24,
  xyz: {
    address: "Bareilly",
  },
  skills: ["React.js", "Node.js", "MongoDB", "Express.js"],
};

console.log(person.firstName);

