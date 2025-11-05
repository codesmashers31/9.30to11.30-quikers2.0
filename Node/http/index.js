import http from 'http'


//console.log(http);



const server = http.createServer(()=>{
    console.log("Server start");
    
})

const PORT = 7000

server.listen(PORT,()=>{
    console.log(`Server start ${PORT}`);
})