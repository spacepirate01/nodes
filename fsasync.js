const fs = require('fs');

fs.readFile('./tests/first.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return
  } 
    const first = data;
  fs.readFile('./tests/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return
    } 
      const second = result;
      fs.writeFile('./tests/result.txt', `Here is the result: ${first}, ${second}`, (err, results) => {
        if (err) {
          console.log(err);
          return
        }
        console.log(results);
    })
  })
});