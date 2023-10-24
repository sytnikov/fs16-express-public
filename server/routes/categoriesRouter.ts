import express from "express"

import { categoriesData } from "../data/categoriesData"

export const categoriesRouter = express.Router()

categoriesRouter.get("/", (_, res) => {
  res.json({ categoriesData })
})

categoriesRouter.get("/:categoryId", (req, res) => {
  const id = req.params.categoryId
  res.json({categoriesData: categoriesData[Number(id)-1]})
} )
