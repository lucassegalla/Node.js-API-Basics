const usuariosController = require('../controllers/usuariosController');

//função principal de busca de rotas
function usuariosRoute(req, res) {
  //receber requisições GET na url /usuarios e chamar função listarUsuarios
  if (req.method === 'GET' && req.url === '/usuarios') {
    usuariosController.listarUsuarios(req, res);
    return true;
  }

  //receber requisições POST na url /usuarios e chamar função criarUsuario
  if (req.method === 'POST' && req.url === '/usuarios') {
    usuariosController.criarUsuario(req, res);
    return true;
  }
  return false;
}

module.exports = usuariosRoute;
