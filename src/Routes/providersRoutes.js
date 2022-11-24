const router = require("express").Router();
const providers = require("../controllers/providersController");

router.get("/", providers.getAll);
router.post("/create", providers.create);
router.put("/update:id", providers.update);
router.delete("/remove:id", providers.remove);

module.exports = router;