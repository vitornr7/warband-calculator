const fs = require('fs');

let rawdata = fs.readFileSync('C:\\Users\\nrvit\\arqs\\prog\\projs\\warband-calculator\\src\\res\\heroes.json');
let player = JSON.parse(rawdata)[0];
