const express = require("express");
const router = express.Router();

const tiemController = require("../app/controllers/TiemController");

router.get("/create", tiemController.create);
router.get("/createSuccess", tiemController.createSuccess);
router.post("/store", tiemController.store);
router.get("/:id/edit", tiemController.edit);
router.put("/:id", tiemController.update);
router.patch("/:id/restore", tiemController.restore);
router.delete("/:id", tiemController.destroy);
router.delete("/:id/force", tiemController.forceDestroy);
router.get("/:slug", tiemController.show);

module.exports = router;
