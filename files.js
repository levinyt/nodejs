const fs=require('fs')

 const read=fs.readFileSync('./files/input.txt','utf-8')
 console.log(read);

 const write=`This is about the Course: ${read}.\n Created on ${Date.now}`
 fs.writeFileSync('./files/output.txt',write)
 console.log('File has been sucessfully writen ');
 
 