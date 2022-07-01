const http = require('http');
const porta = 3000;

const server = http.createServer((request, response)=>{
	console.log('metodo: '+request.method)
	console.log('headers: '+request.headers)
	console.log('versão do https: '+request.httpVersion)
});

server.listen(porta,()=>{
	console.log("server on, Porta:"+ porta)
});