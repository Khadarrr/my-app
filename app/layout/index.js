const values = ["m", "j", "a", "g", "f"];

const didNameCondition = values.some((value, index) => {
  console.log({ index, value });
  if (value >= "f") {
    return true;
  }
});

const modules = [
  { name: "Introduction to Programming", isComplete: false },
  { name: "HTML", isComplete: false },
  { name: "CSS", isComplete: false },
  { name: "JavaScript", isComplete: false },
];

const isSomeCoursesFinished = modules.some((currentModule, index) => {
  console.log("index", index);
  return currentModule.isComplete === true;
});

console.log(isSomeCoursesFinished);

const recipe = {
    item_0: "Egg",
    item_1: "Milk",
    item_2: "Flour",
};

for (const key in recipe) {
    console.log("key:", key, "value:", recipe[key]);
}

//MAP
Object.keys(recipe).map((key) => {
    console.log("using map", recipe[key])
});


Object.entries(recipe).forEach(([key, value]) => {
    console.log("key:", key, "value:", value);
  });

  const numbers = [1, 2, 3, 4];
  