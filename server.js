const http = require('http');
const porta = 3000;

const server = http.createServer((request, response)=>{
	console.log('metodo: '+request.method)
	console.log('headers: '+request.headers)
	console.log('versão do https: '+request.httpVersion)
	if (request.method === "GET") {
		response.write('<body><iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></body>')
		response.end()
	}
	
	if (request.method === "POST") {
		response.writeHead(201, {
			'Content-type':'application/json'
		})
		response.write('{"message":" email gravado"}')
		response.end()
	}
});

server.listen(porta,()=>{
	console.log("server on, Porta:"+ porta)
});