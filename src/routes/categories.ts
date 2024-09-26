import { Router } from "express";

import Categories from "../controllers/categories";

const router = Router();

router.get("/", Categories.getAll);

export default router;
