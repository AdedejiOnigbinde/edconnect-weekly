const express = require('express');

const router1 = express.Router();
const {getPrograms, getGradYears } = require('../services/school')
const {create} = require('../services/user')


router1.get('/signup', (req, res) => {
 const graduationList = getGradYears();
 const programList = getPrograms();
res.render('Signup', {programList:programList, graduationList:graduationList});

});

router1.use(express.urlencoded({extended:true}));

router1.post('/signup', (req,res)=>{
    const user = create(req.body);
});


module.exports = router1;