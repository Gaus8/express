const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel');
const { response } = require('express');

//const Contact = require('../models/contactModels')

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler( async (req,res)  => {
    const { username, email, password } = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error('All fields are mandatory');
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error('Usuario ya registrado')
    }

//HASH PASSWORD
//EN EL VALOR PASSWORD: SE DEBE COLOCAR EL VALOR HASHEADO; Y NO SOLO EL VALORS; SINO DARA ERROR
    const hashPasword = await bcrypt.hash(password,10);
    const user = await User.create({
        username, 
        email,
        password:hashPasword
    });
    
    console.log(`User created ${user}`);
    if(user){
        res.status(201).json({_id:user.id, email:user.email})
    }else{  
        res.status(400);
        throw new Error('User data is not valid')
    }
    res.json({message:'Succesfull'})
});

//@desc Login a user
//@route POST /api/users/register
//@access public
const loginUser = asyncHandler( async (req,res)  => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const user = await User.findOne({ email })
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
           user:{
            username: user.username,
            email: user.email,
            id: user.id
           },
        },process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "10m"}
    );
        res.status(200).json({accessToken})
    }else{
        res.status(401);
        throw new Error('Email o password erroneos')
    }
});

//@desc User info
//@route GET /api/users/register
//@access public
const currentUser = asyncHandler( async (req,res)  => {
    res.json(req.user)
});

module.exports ={
    registerUser,
    loginUser,
    currentUser
}

