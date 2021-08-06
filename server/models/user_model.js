import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    profileImage: String,
    phoneNumber: String,
    email: String
})

// userAvatar
// https://www.google.com/search?q=user+avatar+png&tbm=isch&source=iu&ictx=1&fir=8C7lIS-1cIFLOM%252Cs9gI7kxjYmKUNM%252C_&vet=1&usg=AI4_-kRprPxaXassk5VTFBgtgnZaIneBfw&sa=X&ved=2ahUKEwjNwbyC55HyAhUFH7cAHSLUC9wQ9QF6BAgTEAE#imgrc=8C7lIS-1cIFLOM

const User = mongoose.model('Users', userSchema);

export default User;