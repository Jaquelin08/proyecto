const { Router } = require('express');
const router = Router ();

const personajes = require('../example.json');
console.log(personajes);

router.get('/', (req, res) =>{
    res.json(personajes);
});


router.post('/', (req,res) =>{
    const {NAME, peso, altura, residente} =req.body;
  if(NAME && peso && altura && residente){
    const newpersonaje ={...req.body}; 
    res.json('saved');
    } else{
        res.send('Wrong Request');
    }
    
});

module.exports = router;