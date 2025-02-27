const fs=require('fs')
//Blocking sync 
//  const read=fs.readFileSync('./input.txt','utf-8')
//  console.log(read);

//  const write=`This is about the Course: ${read}.\n Created on ${Date.now}`
//  fs.writeFileSync('./output.txt',write)
//  console.log('File has been sucessfully writen ');
 
 //Non  blocking async 
 fs.readFile('./start.txt','utf-8',(err,data)=>{
    fs.readFile(`./${data}.txt`,'utf-8',(err,data1)=>{
        console.log(data1);
        fs.writeFile('./final.txt',`${data}\n${data1}`,'utf-8',err=>{
            console.log('writing file sucessfull');
            
        })

    })
    
    

 })
 console.log('will read this');
 