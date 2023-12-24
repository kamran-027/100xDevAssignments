// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
let fs = require("fs");

fs.readFile("./some.txt", "utf-8", function (err, data) {
  let strArr = data.split(" ");
  let newStrArr = strArr.filter((str) => {
    return str !== "";
  });
  let newStr = newStrArr.join(" ");
  fs.writeFile("./some.txt", newStr, function (err, data) {
    console.log(err);
  });
});
