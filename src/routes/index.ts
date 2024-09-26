import { Router } from "express";

import brands from "./brands"
import categories from "./categories"
import products from "./products"

const router = Router();

router.use("/products", products)
router.use("/categories", categories)
router.use("/brands", brands)

export default router;
