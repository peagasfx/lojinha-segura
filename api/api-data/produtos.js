const produtos = require('../../../data/produtos.json');

module.exports = function handler(req, res) {
  res.status(200).json(produtos);
};
