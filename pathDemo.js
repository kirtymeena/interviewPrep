import path from 'path'

const filePath = './dir1/dir2/test.txt';

// basename()
console.log(path.basename(filePath)) //test.txt

// dirname
console.log(path.dirname(filePath)); //.dir1/dir2

// extname
console.log(path.extname(filePath)) //.txt

// parse() -  return object
console.log(path.parse(filePath))
/* {
  root: '',
  dir: './dir1/dir2',
  base: 'test.txt',
  ext: '.txt',
  name: 'test'
}  */
