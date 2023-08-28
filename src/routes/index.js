const { Router } = require('express');
const res = require('express/lib/response');
const router = Router();

router.get('/', (req, res) =>{
    res.json("hello world");
    }
);

module.exports = router;