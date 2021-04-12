const fs = require("fs");
const fetch = require("node-fetch");

fetch("http://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((Data) =>
    fs.writeFile("result/Posts.txt", JSON.stringify(Data), (err) => {
      if (err) throw err;
    })
  )
  .catch((err) => console.log(err));
