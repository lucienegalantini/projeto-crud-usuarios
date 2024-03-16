const { v4:uuidv4 } = require('uuid');

const usersBase = [];



//criar um usuário

function createUser(req, res){
    const {username} = req.body;

    const id = uuidv4();

    usersBase.push({
        id,
        username,
        isAdmin: false,
    });

    return res.status(201).json(usersBase);
};

//listar usuarios
function listUsers (req, res){return res.status(200).json(usersBase)};

//Buscar usuario pela id
function getUser(req, res){
    const user = req.user;  
    return res.status(200).json(user);
};

//Atualizar usuário
function updateUser(req, res){
    const user = req.user;  
    const { username } = req.body;
    user.username = username;
    res.status(200).json(user);
}

//tornar o usuário admin
function makeUserAdmin(req,res){
    const user = req.user;  
    if(user.isAdmin === true){
        return res.status(400).json({error: "user is already an admin!"});
    }

    user.isAdmin = true;
    return res.status(200).json(user);
}

//Deletar usuário
function deleteUser(req, res){
    const user = req.user;   
    const index = usersBase.indexOf(user);

    if(index === -1){
        return res.status(404).json({error: "user not found!"});
    }

    usersBase.splice(index,1);
    return res.status(204).send();
}

module.exports = {
    createUser,
    listUsers,
    getUser,
    updateUser,
    makeUserAdmin,
    deleteUser,
    usersBase

}