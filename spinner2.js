process.stdout.write('hello from spinner1.js... \rheyyy\n');
let delay = 100;
const spinner2 = function (str) {
  for (let i = 0; i < str.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${str[i]}     `);
    }, delay);
    delay += 300;
  }
};
console.log(spinner2(['|', '/', '-', '\\', '/', '-', '\\']));

