import express from "express";
const router = express.Router();

router.get('/login', (req, res) => {
    res.send("logged in")
})

export default router;