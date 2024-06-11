const a = (a, b, c) => {
  return {
    name: a,
    age: b,
    job: c,
  };
};
// console.log(a());

const b = a("송이현", 31, "학생");

console.log("첫번째 b:", b);
b.address = "대전";
console.log("두번째 b:", b);
