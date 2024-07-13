// use index.html for core js base reading

import { readdir } from 'fs';
 
const path = 'D:/bca';
 
readdir(path, (err, files) => {
  if (err) {
    console.error('Error', err);
    return;
  }
 
  console.log('Files in the directory:');
  files.forEach(file => {
    console.log(file);
  });
});
