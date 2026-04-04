//! Union

function combine(a: number | string, b: number | string) {
  let result;
  if (typeof a === "number" && typeof b === "number") {
    result = a + b;
  } else {
    result = a.toString() + b.toString();
  }
  return result;
}

const sum = combine(10, 20);
console.log(sum);

const combineName = combine("Vishal ", "Gupta");
console.log(combineName);

//! Literal Types

function addNumbers(
  c: number | string,
  d: number | string,
  conversionType: "as-number" | "as-string",
) {
  let result;
  if (
    (typeof c === "number" && typeof d === "number") ||
    conversionType === "as-number"
  ) {
    result = +c + +d;
  } else {
    result = c.toString() + d.toString();
  }
  return result;
}

const ans1 = addNumbers("10", "50", "as-number");
const ans2 = addNumbers("Aryan ", "Gupta", "as-string");

console.log(ans1, ans2);

//! Type Alias or Custom Types

type CustomType = number | string;

function addNumbers2(
  d: CustomType,
  c: CustomType,
  conversionType: "as-number" | "as-string",
) {
  let result;
  if (
    (typeof c === "number" && typeof d === "number") ||
    conversionType === "as-number"
  ) {
    result = +c + +d;
  } else {
    result = c.toString() + d.toString();
  }
  return result;
}

const ansOne = addNumbers("18", "50", "as-number");
const ansTwo = addNumbers("Aryan ", "Gupta", "as-string");

console.log(ansOne, ansTwo);

type User = {
  name: string;
  age: number;
  skills: string[];
};

const user: User = {
  name: "Priyanshu",
  age: 24,
  skills: ["Software Development", "Devops"],
};

console.log(user.skills);

function greet(user: User) {
  console.log(`Hi, I'm ${user.name}`);
}

greet(user)