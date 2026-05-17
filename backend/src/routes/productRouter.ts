import { Router } from "express";
import { getCategories, getProductBySlug, listProducts } from "../controlllers/productController";

const router = Router();


router.get("/", listProducts);
router.get("/categories", getCategories);
router.get("/:slug", getProductBySlug);

export const productRouter = router;