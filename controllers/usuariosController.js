const usuariosService = require('../services/usuariosService');

//listar usuarios cadastrados
function listarUsuarios(req, res) {
  const usuarios = usuariosService.listarUsuarios();
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(usuarios));
}

//receber e juntar requisição em chunks e printar quando finalizado.. transformar json recebido em objeto javascript
function criarUsuario(req, res) {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    const usuario = JSON.parse(body);

    const novoUsuario = usuariosService.criarUsuario(usuario);

    res.statusCode = 201;
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(novoUsuario));
  });
}

module.exports = {
  listarUsuarios,
  criarUsuario,
};
