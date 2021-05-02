const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
)
UserSchema.methods.follow = function (user_id) {
    if (this.following.indexOf(user_id) === -1) {
        this.following.push(user_id)        
    }
    return this.save()
}
UserSchema.methods.addFollower = function (fs) {
    this.followers.push(fs)    
    return this.save()    
}
module.exports = mongoose.model('User', UserSchema)