import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String
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
    yearOfBirth: {
        type: Number,
    },
    monthOfBirth: {
        type: Number,
    },
    dayOfBirth: {
        type: Number,
    },
    hometownCity: {
        type: String
    },
    hometownState: {
        type: String
    }
}, {
    //createdAt and updatedAt
    timestamps: true
}
)

const User = mongoose.model('User', userSchema);

export default User;

/*
{
"name": "Michael",
"picture": "abcdefg",
"email": "michael@mail.com",
"password": "123456",
"yearOfBirth" : 1979,
"monthOfBirth": 9,
"dayOfBirth": 20,
"hometownCity": "Metuchen",
"hometownState": "New Jersey"
}
*/