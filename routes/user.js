const usercontroller = require('../controller/user')

module.exports = (router) => {

    
    // Get a user
    router
        .route('/user/:id')
        .get(usercontroller.getUser)

    // Get a user profile
    router
        .route('/user/profile/:id')
        .get(usercontroller.getUserProfile)

    // Adds a user
    router
        .route('/user')
        .post(usercontroller.addUser)

    // Follow a user
    router
        .route('/user/follow')
        .post(usercontroller.followUser)
}