const config = require('../../../data/configuracoes.json');

module.exports = function handler(req, res) {
  res.status(200).json(config);
};
