const express = require ("express");

const router = express.Router(); //constructor

//crear productos

router.post("/productos", (req, res) => {
    res.send("crear producto");
});

module.exports = router;