const products = require ("../models/products");

module.exports = {
  create,
  getAll,
  remove,
  update
}
const create = (req, res) => {
    const newProduct = {
      name: req.body.name,
      description: req.body.description,

    };
    products.create(newProduct)
      .then((data) => res.status(201).json({ msg: "Product added: ", data }))
      .catch((err) => res.status(500).json({ msg: 'Error: ${err}' }));
  };
const getAll = (req, res) => {
  products.find({ isDeleted: false })
    .then((data) => res.status(200).json({ data }))
    .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
  }
const remove = (req, res) => {
  const { id } = req.params;
  products.findByIdAndUpdate(id, { isDeleted: true }, { new: true })
    .then((data) => {
      if (data.length === 0) return res.status(404).json({ msg: `Product not found by ID: ${id}` });
      return res.status(204).json({ msg: "Product deleted", data });
    })
    .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};
const update = (req, res) => {
  const { id } = req.params;
  products.findByIdAndUpdate(id, req.body, { new: true })
    .then((data) => {
      if (data.length === 0) return res.status(404).json({ msg: `Product not found by ID: ${id}` });
      return res.json({ msg: "Product updated", data });
    })
    .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};
  