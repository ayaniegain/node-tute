import express from "express";

import {
  handleGeturlController,
  handlePosturlController,
} from "../controllers/url.controllers.js";
const router = express.Router();

router.get("/url/:id", handleGeturlController)
router.post("/url", handlePosturlController);

export default router;
