//continue if required or delete user.model.js and create new files
import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = Schema({
    username : { type : String, unique:true, required:true, lowercase:true, trim:true, index:true },
    email:{ type:String, unique:true, required:true, lowercase:true, trim:true },
    fullName:{ type:String, required:true, lowercase:true, trim:true,  },
    avatar: { type:String, required:true },
    coverImage: { type:String },
    password: {type:String, required : [true, "password is required"]},
    refreshToken: String,
}, {timestamps:true})

// encrypting the password using bcrypt befor inserting into pre
userSchema.pre("save", async function (next) {
    if(this.isModified("password")){
        this.password = bcrypt.hash(this.password, 10)
    }
    next()
})

// adding method to check if password is correct into the userSchema
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

// adding method to generate access token
userSchema.methods.generateAccessToken= function() {
    return jwt.sign({
        _id : this._id,
        email : this.email,
        username :this.username,
        fullName : this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

//adding method to generate request token
userSchema.methods.generateRequestToken = function (){
    return jwt.sign({
        _id : this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

export default User = mongoose.model("User",userSchema)