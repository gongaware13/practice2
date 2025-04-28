import * as fs from 'fs';

export const readTextFile = () => {

  let textResult;
  fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      textResult = err;
      return;
    }
    textResult = data;
    console.log(data); // Displays the content of the .txt file
    return;
  });
}

export const testVariable = "testString";