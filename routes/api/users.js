const express = require("express");
const ctrl = require("../../controllers/user");

const { authenticate, upload } = require("../../middlewares");

const router = express.Router();

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
