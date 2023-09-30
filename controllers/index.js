const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const express = require("express");
const app = express();
app.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
