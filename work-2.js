function formatHTML(language = "korean") {
  let htmlData = {
    titleOne: "송이현",
    titleTwo: "songehyun",
    h1: "내이름은",
    p: "송이현입니다",
  };

  let decision = () => {
    if (language === "korean") {
      return htmlData.titleOne;
    }
    if (language === "english") {
      return htmlData.titleTwo;
    }
  };

  let html = `
  <html>
    <head>
      <title>${decision()}</title>
    </head>
    <body>
      <h1>${htmlData.h1}</h1>
      <p>${htmlData.p}</p>
    </body>
  </html>
  `;

  return html;
}

console.log(formatHTML("korean"));
console.log(formatHTML("english"));
