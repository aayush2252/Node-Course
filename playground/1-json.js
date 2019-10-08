const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log(data.title);

// const book = {
//   title: "Ego is the Enwmy",
//   author: "Ryan"
// };

// const bodyJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bodyJSON);
