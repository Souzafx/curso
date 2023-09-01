import { request, response } from 'express'
import Business from '../dao/Business-dao.js

const businessService = new Business()

export const getBusiness = async (req, res) => {
    let result = await businessService.getBusiness()
    if (!result) {
        res.status(404).send('Business not found')
    }
    res.send(result)
}

export const getBusinessByid = async (req, res) => {
    const { id } = req.params;
    let result = await businessService.getBusinessByid(id)
    if (!result) {
        res.status(404).send('Business not found')
    }
    res.send(result)
}

export const createBusiness = async (request, response) => {
    let result = await businessService.saveBusiness(newBusiness)
    if (!result) {
        response.status(404).send('Business not found')
    }
    response.send(result)
}

export const addProduct = async (request, response) => {
    let product = request.body;
    let businessId = req.params.id;
    let business = await businessService.getBusinessByid(business)
    if (!result) {
        response.status(404).send('Business not found')
    } else {
        business.product.push(product);
        let result = await businessService.updateBusinessId(businessId, business)
        response.send(result)
    }
}