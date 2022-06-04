// import models
const { User } = require("../../models");
// import joi
const Joi = require("joi");
//import bcrypt
const bcrypt = require("bcrypt");
// import jwt
const jwt =require("jsonwebtoken");
// exports file register
exports.register = async (req, res) => {
// create validation
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().min(5).required(),
        password: Joi.string().min(6).required()
    });

    const { error } = schema.validate(req.body);
// create condition if validation error
    if(error){
        return res.status(400).send({
            error: {
                message: "wrong input"
            }
        });
    }

    try {
//create round
        const salt = await bcrypt.genSalt(10);
//encrypt password
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

       

//create variable to accomodate request from user
       const newUser = await User.create({
           name: req.body.name,
           email: req.body.email,
           password: hashedPassword,
       });
//create TOKEN
        const token = jwt.sign({newUser}, process.env.SECRET_KEY);
//response status if data success
       res.status(201).send({
           status : "success",
           data: {newUser},
           token
       })
    //response if data error    
    } catch (error) {
        console.log(error);
        res.send({
            status : "error",
            message : "Server Error"
        })
    }
}

exports.login = async (req, res) => {
//make validation
    const schema = Joi.object({
        email: Joi.string().email().min(5).required(),
        password: Joi.string().min(6).required()
    });

    const { error } = schema.validate(req.body);
//catch error
    if(error){
        return res.status(400).send({
            error: {
                message: "wrong input"
            }
        });
    }

    try {
//find user by email
        const userExist = await User.findOne({
            where: {
                email : req.body.email
            },
            exclude : ["createdAt", "updatedAt"]
        });
//catch data if wrong input
        if(!userExist){
            return res.status(400).send({
                status : "failed",
                message : "wrong input"
            });
        }
//for validate password if dont use bcrypt
        // if(userExist.password !== req.body.password){
        //     return res.status(400).send({
        //         status : "failed",
        //         message : "wrong input"
        //     });
        // }
// for compare password to encrypt or database
        const isValid = await bcrypt.compare(req.body.password, userExist.password)

        console.log(isValid)
//catch the error
        if(!isValid){
            return res.status(400).send({
                status : "error",
                message : 'Email or Password not match'
            })
        }
//create TOKEN
    
const token = jwt.sign({userExist}, process.env.SECRET_KEY);

        console.log(token);
//catch if data success
        res.status(200).send({
            status : "Success",
            data : {userExist},
            token
        });
        
    } catch (error) {
        console.log(error);
        res.send({
            status : "error",
            message : "server error"
        })
    }
}