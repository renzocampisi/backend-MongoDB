const router = require("express").Router();
const products = require("../controllers/productsController");

router.get("/", products.getAll);
router.post("/create", products.create);
router.put("/update:id", products.update);
router.delete("/remove:id", products.remove);

module.exports = router;