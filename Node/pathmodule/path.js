import path from 'path';

const filepath = '9.30_11.30/Node/pathmodule/path.txt'

console.log(path.basename(filepath));
console.log(path.dirname(filepath));

console.log(path.extname(filepath));


console.log('Path join',path.join("9.30_11.30","Node", "path.txt"));


console.log(path.resolve());
