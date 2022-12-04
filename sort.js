// import {byString} from 'sort-es'
const sortes = require('sort-es');
const unsorted = ["test.txt", "let.docx", "", "heloo.js", "joe.ts"];
const sorted = unsorted.sort(sortes.byString({desc : true}));

console.log(sorted); //(5) ["aaa", "bbbb", "cccc", "xxx", "zzz"]