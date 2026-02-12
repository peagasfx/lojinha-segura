import produtos from '../../../data/produtos.json';

export default function handler(req, res) {
  res.status(200).json(produtos);
}
