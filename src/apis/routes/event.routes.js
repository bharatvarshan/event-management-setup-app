const express = require("express");
const router = express.Router();
const { getAllEvents } = require("../handlers/event.handler");

router.get("/", getAllEvents);

module.exports = router;
