const { Router } = require('express');
const router = Router ();

const fuerza = require('../routes/masa.json');
console.log(fuerza);

router.get('/', (req, res) =>{
    res.json(fuerza);
});




module.exports = router;