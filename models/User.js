import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    plan: {
        type: String,
        required: true
    }
}, {
    //createdAt and updatedAt
    timestamps: true
}
)

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

//before saving 'pre-save', encrypt password
userSchema.pre('save', async function (next) {
    //run ONLY if password field is sent or modified - when user updates profile, skip
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    //plain text password created by user is set to hashed password
    this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model('User', userSchema);

export default User;