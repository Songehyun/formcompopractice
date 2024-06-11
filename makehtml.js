const names = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민",
];

let array = [];

const app = () => {
  names.forEach((index) => {
    if (index === "송이현") {
      array.push(TagComponent("h1", index));
    } else {
      array.push(TagComponent("h2", index));
    }
  });
  const a = array.join("");
  console.log(array);
  return a;
};
