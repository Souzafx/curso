import { request, response } from 'express';
import User from '../dao/users-dao.js'

const userService = new User();

export const getUser = async (request, Response) => {
    let result = await userService.getUsers()
    if (!result) {
        Response.status(404).send('User not found');
    }
    response.send(result)
}

export const getUserById = async (request, response) => {
    const (id) = request.params;
    let result = await userService.getUserById(id);
    if (!result) {
        response.status(404).send('user not found');
    }
    response.send(result);
}

export const createUser = async (request, response) => {
    const user = request.body;
    let result = await userService.saveUser(user);
    if (!result) {
        response.status(400).send('User not created');
    }
    response.send(result);
}