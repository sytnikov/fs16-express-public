
import express from "express";
import ctrl from "../controllers/books";

const router = express.Router();
router.get("/", ctrl.getAllBooks);
router.post("/", ctrl.addBook);
router.delete("/:id", ctrl.deleteBook);

export default router;
