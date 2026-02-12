module.exports = (req, res) => {
  res.status(200).json({
    nome_loja: "Garimpo Barato",
    cartao_habilitado: "1",
    tema: "default",
    cpf_obrigatorio: "nao_exigir"
  });
};
