const express = require("express");
const router = express.Router();
const player = require('../Schema/playerSchema');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const bcrypt = require('bcrypt');



router.post('/login', function (req, res) {
    console.log("API called");
    //console.log(req.body)
    player.findOne({ Name: req.body.username})
        .then((result) => {
            var Name = req.body.Name;
           
            console.log(result)
            if (bcrypt.compareSync(req.body.password, result.Password)) {
                let token = jwt.sign({ Name,id:result._id, Pass: result.Password }, 'secret');
                return res.status(201).send({ token: token, role: result.Role ,playerData:result});
            }

        }).catch((error) => {
            return res.status(401).send(error)
        })

})
router.get('/getUserData/:id', function (req, res) {
    console.log(req.params.id)
    player.find({_id:req.params.id},function (err, data) {
        if (err)
            return res.send(err)
        else
            res.send(data)
    })
})
router.get('/get', function (req, res) {

    player.find(function (err, data) {
        if (err)
            return res.send(err)
        else
            res.send(data)
    })
})
router.post('/getSelected', function (req, res) {

    player.find({_id:req.body},function (err, data) {
        console.log("body",req.body)
        if (err)
            return res.send(err)
        else
            res.send(data)
    })
})
router.delete('/del/:id', function (req, res) {
    console.log("params ",req.body);
    console.log("params",req.params)
    player.findByIdAndRemove({_id:req.params.id},function (err, data) {
        console.log("body",req.body)
        if (err)
            return res.send(err)
        else
            res.send(data)
    })
})


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
        cb(null, true);
    else
        cb(null, false)

}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5

    },
    fileFilter: fileFilter
})
router.post('/register', upload.single('Profile'),  async function (req, res) {
        let userProfile;
        if(req.file)
        userProfile=req.file.path
        else
        userProfile='uploads/userImage.png';
    const body = req.body;
    console.log(req.body.userProfile);
    let hash = await bcrypt.hashSync(body.Password, 10);
    await player.create({ ...body, Profile: userProfile, Password: hash }, function (err, data) {
        if (err) {
            console.log(err)
            return res.status(400).send(err)
        }
        else res.send(data);
    })
})

router.put('/update/:id', upload.single('Profile'), async function (req, res) {
    let userProfile;
    if(req.file)
    userProfile=req.file.path
    else
    userProfile='uploads/userImage.png';
    const body = req.body;
    console.log("body",req.body);
    try{
        let player1=await player.findOneAndUpdate({_id:req.params.id},{ ...body, Profile:userProfile});
                if(player1.isModified()){
                    player1.increment();
                }
                await player.findById({_id:req.params.id}).then((result)=>{
                    console.log(result)
                        res.send(result);
                })
    }
    catch(e) {
        res.send(e)
    }
   
       

})
router.get('/steam/:team', function (req, res) {

    player.find({Team:req.params.team},function (err, data) {
        if (err)
            return res.send(err)
        else
            res.send(data)
    })
})
router.get('/filterTeam', function (req, res) {

    player.sort({Name:1},function (err, data) {
        if (err)
            return res.send(err)
        else
            res.send(data)
    })
})

module.exports = router;