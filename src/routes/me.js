const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");

router.get("/stored/tiems", meController.storedTiems);
router.get("/trash/tiems", meController.trashTiems);

module.exports = router;
