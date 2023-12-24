// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

let fs = require("fs");
let newContent = "Updated the content using write file library of file-system";

fs.writeFile("./some.txt", newContent, function (err) {
  console.log(err);
});
