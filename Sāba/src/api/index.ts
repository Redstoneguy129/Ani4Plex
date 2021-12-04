import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.send("This is the API")
})

import auth from "./auth";
router.use('/auth', auth);

export default router;