const express = require('express');
const userRoutes = express.Router();

//inclusão dos middlewares
const checkUserExists = require('../middlewares/checkUserExistsMiddleware');
const findUser = require('../middlewares/findUserMiddleware');

//Inclusão de Controllers
const userController = require('../controllers/userController')
  
//criar usuarios

userRoutes.post('/', checkUserExists, (req, res)=> userController.createUser(req, res));

//listar usuarios
userRoutes.get('/', (req,res)=> userController.listUsers(req,res));


//Buscar usuario pelo ID

userRoutes.get('/:id', findUser, (req, res)=> userController.getUser(req, res) 
);

//atualizar usuário

userRoutes.patch('/:id', findUser, (req, res)=> userController.updateUser(req, res));

//tornar usuario admin
userRoutes.patch('/admin/:id', findUser, (req, res)=> userController.makeUserAdmin(req, res));

//deletar usuario
userRoutes.delete('/:id', findUser, (req, res)=> userController.deleteUser(req, res));

module.exports = userRoutes;
