import { fakerPT_BR as faker } from '@faker-js/faker';

export const generateUser = () => {

    let numberOfProducts = parseInt(math.floor(math.random() * 10));
    let products = [];

    for(let i = 0; i < numberOfProducts; i++) {
        products.push(generateProducts());
    }

    return {
        name: faker.person.firstName(),
        last_name: faker.person.lastname(),
        gender: faker.person.sex(),
        birth_date: faker.data.birthdate(),
        email: faker.internet.exempleEmail(),
        products
    }

};

export const generateProducts = () => {

    return {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescrription(),
        price: faker.commerce.price(),
        id: faker.database.mongodbObjectId(),
        image: faker.image.url(),
    }

};