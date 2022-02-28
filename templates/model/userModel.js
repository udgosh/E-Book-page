const Mongoose = require('moongoose')
const validator = require('validator')

const userSchema = new Mongoose({
    email:{
        type: string,
        required: true,
        validate: (value) =>{
            return validator.isEmail(value)
        }
    }
})


const User = Mongoose.model('Email',userSchema)

const user = new User({
    email: 'test@gmail.com',
    firstName: 'hello'
})

user.save().then((doc) =>{
    console.log(doc);
}).catch((err)=>{
    console.log(err);
})