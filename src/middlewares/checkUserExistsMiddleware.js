//Inclusão de Controllers
const userController = require('../controllers/userController')

function checkUserExists(req, res, next){
    const { username } = req.body;
    

    const userAlreadyExists = userController.usersBase.some((user) => user.username === username);

    if(userAlreadyExists){
        return res.status(400).json({error: "user already exists!"});
    }

    return next();

}

module.exports = checkUserExists;