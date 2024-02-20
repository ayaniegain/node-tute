import { Router } from "express";
import {
  getQueryController,
  getUserController,
} from "../controller/user.controller.js";
import { commonIndex, validateQuery } from "../middleware/middleware.js";

let router = Router();

router.get("/", validateQuery, getQueryController);
router.get("/:id", commonIndex, getUserController);

export {router};
