import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // picture: {
    //     type: String,
    //     required: true,
    // }
    // ,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    // ,
    // yearOfBirth: {
    //     type: Number,
    //     required: true,
    // },
    // monthOfBirth: {
    //     type: Number,
    //     required: true,
    // },
    // dayOfBirth: {
    //     type: Number,
    //     required: true,
    // },
    // hometownCity: {
    //     type: String,
    //     required: true,
    // },
    // hometownState: {
    //     type: String,
    //     required: true,
    // },
    // hometownZip: {
    //     type: String,
    //     required: true
    // }
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
"hometownState": "New Jersey",
"hometownZip": "08840"
}
*/