const providers = require ("../models/providers");

module.exports = {
  create,
  getAll,
  remove,
  update
}
const create = (req, res) => {
  const newProvider = {
    name: req.body.name,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    typeProvider: req.body.typeProvider
  };
  providers.create(newProvider)
    .then((data) => res.status(201).json({ msg: "Profile added: ", data }))
    .catch((err) => res.status(500).json({ msg: 'Error: ${err}' }));
};

const getAll = (req, res) => {
  providers.find({ isDeleted: false })
    .then((data) => res.status(200).json({ data }))
    .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
}

const remove = (req, res) => {
  const { id } = req.params;
  providers.findByIdAndUpdate(id, { isDeleted: true }, { new: true })
    .then((data) => {
      if (data.length === 0) return res.status(404).json({ msg: `Providers not found by ID: ${id}` });
      return res.status(204).json({ msg: "Provider deleted", data });
    })
    .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

const update = (req, res) => {
    const { id } = req.params;
    providers.findByIdAndUpdate(id, req.body, { new: true })
      .then((data) => {
        if (data.length === 0) return res.status(404).json({ msg: `Provider not found by ID: ${id}` });
        return res.json({ msg: "Provider updated", data });
      })
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};