const fs = require("fs");
const { json } = require("stream/consumers");

const myObj = {
  name: "Asad Ishteaque",
  email: "find@abc.com",
  address: {
    city: "Chattogram",
    provinance: "Bangladesh",
  },
};

const data = JSON.stringify(myObj);

fs.writeFile("./test.json", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Running Successful");
  }
});
