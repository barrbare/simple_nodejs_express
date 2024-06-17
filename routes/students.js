const express = require('express');
const router = express.Router();
const studentService = require('../services/studentService');

// router.get('/all', (req, res)=>{
//     return studentService.findAll(req,res);
// });

// router.get('/add', (req, res)=>{
//     return studentService.findAll(req,res);
// });

router.get('/all', studentService.getAll);
router.get('/:id', studentService.getOne);
router.post('/add', studentService.add);
router.delete('/:id', studentService.delete);
router.put('/:id', studentService.update);

module.exports = router;