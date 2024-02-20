import { Router  } from "express";
import { commonIndex } from "../middleware/middleware.js";
import { deleteProductController, patchProductController, postProductController, putProductController } from "../controller/product.controller.js";

let router =Router()

router.post("/", postProductController);
router.put("/:id",commonIndex, putProductController);
router.patch("/:id", commonIndex,patchProductController);
router.delete("/:id", commonIndex,deleteProductController);


export {router};



