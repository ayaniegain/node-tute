

const express = require("express");
const { handlegetAllUser, handleSingleUser, handleDeleteUser, handleUpdateUser, handlecreateUser } = require("../controllers/user.controllers");
const router = express.Router();

router.get("/",handlegetAllUser)
    .post("/", handlecreateUser)
    .get("/:id",handleSingleUser)
    .delete("/:id",handleDeleteUser)
    .put("/:id",handleUpdateUser)

module.exports=router