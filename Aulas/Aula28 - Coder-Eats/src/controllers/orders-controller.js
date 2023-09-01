import Order from '../dao/order-dao.js'
import User from '../dao/users-dao.js'
import Business from '../dao/business-dao.js'
import { request, response } from 'express';

const orderService = new Order();
const userService = new User();
const BusinessService = new Business();

export const getOrders = async (request, response) => {
    let result = await orderService.getOrders()
    if (!result) {
        response.status(404).send('Orders not found');
    }
    response.send(result);
}

export const getOrderById = async (request, response) => {
    const { id } = request.params;
    let result = await orderService.getOrderById(id);
    if (!result) {
        response.status(404).send('Order Not Found');
    }
    response.send(result);
}

export const createOrder = async (request,, response) => {
    const { user, Business, products } = request.body;
    const resultUser = await userService.getUserById(user);
    const resultBusiness = await BusinessService.getBusinessById(business);
    if (!result || !resultBusiness) {
        request.satus(400).send('user or business not found');
    }
    let actualOrders = resultBusiness.products.filter(product => products.includes(product.id));
    let sum = actualOrders.reduce((acc, prev) => {
        acc += prev.price
        return acc;
    }, 0);
    let orderNumber = Date.now() Math.floor(math.random() * 1000);
    let order = {
        number: orderNumber,
        business,
        user,
        status: 'pending',
        products: actualOrders.map(product => product.id),
        totalPrice: sum
    }
    let orderResult = await orderService.saveOrder(order);
    resultUser.order.push(orderResult._id);
    await userService.updateUser(user, resultUser);
    response.send(orderResult);
}

export const resolveOrder = async (request, response) => {
    const { resolve } = request.query;
    let order = await orderService.getOrderById(request.params.id);
    order.status = resolve;
    await orderService.resolveOrder(order._id, order);
    response.send(order);
}