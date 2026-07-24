const usuarios = require('../data/usuarios');

function listarUsuarios() {
  return usuarios;
}

function criarUsuario(usuario) {
  usuarios.push(usuario);

  return usuario;
}

module.exports = {
  listarUsuarios,
  criarUsuario,
};
