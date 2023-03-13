import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
});

// plugin

const user = mongoose.model('User', UserSchema);
export default user;