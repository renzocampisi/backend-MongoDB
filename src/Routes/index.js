const router = express.Router();
const productsRoutes = require("./Routes/productsRoutes");
const providersRoutes = require("./Routes/providersRoutes");

router.use("/api/products", productsRoutes);
router.use("/api/providers", providersRoutes);