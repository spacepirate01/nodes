const {readFile} = require('fs');

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

// getText('./tests/first.txt').then((result) => console.log(result)).catch((err) => console.log(err));

const start = async () => {
  try {
    const first = await getText('./tests/first.txt');
    const second = await getText('./tests/second.txt');
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
}

start();