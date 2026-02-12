module.exports = (req, res) => {
  res.status(200).json([
    {
      id: 1,
      nome: "Smartwatch Ultra",
      descricao: "Relógio inteligente com monitor cardíaco e notificações.",
      preco: 129.90,
      preco_antigo: 199.90,
      categoria: "eletronicos",
      imagem: "https://via.placeholder.com/300",
      vendidos: 154,
      rating: 4.5,
      ativo: true,
      oculto: false,
      principal: 1,
      frete_gratis: 1
    },
    {
      id: 2,
      nome: "Fone Bluetooth Pro",
      descricao: "Fone sem fio com cancelamento de ruído.",
      preco: 89.90,
      preco_antigo: 149.90,
      categoria: "eletronicos",
      imagem: "https://via.placeholder.com/300",
      vendidos: 230,
      rating: 4.8,
      ativo: true,
      oculto: false,
      principal: 0,
      frete_gratis: 1
    }
  ]);
};
