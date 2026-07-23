const http = require('http');
const usuarios = [];

//criar servidor com metodos req e res
const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  //se url for vazia vai pra pagina inicial
  if (req.method === 'GET' && req.url === '/') {
    res.end('Pagina inicial');
    return;
  }

  //receber requisições POST na url /usuarios em chunk e printar quando finalizado.. transformar json recebido em objeto javascript
  if (req.method === 'POST' && req.url === '/usuarios') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const usuario = JSON.parse(body);

      usuarios.push(usuario);
      console.log(usuario);

      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(usuarios));
    });
    return;
  }

  //metodo GET
  if (req.method === 'GET' && req.url === '/usuarios') {
    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(usuarios));
    return;
  }

  if (req.url === '/produtos') {
    res.end('lista de produtos');
    return;
  }

  res.statusCode = 404;
  res.end('pagina nao encontrada');
});

server.listen(3000);
