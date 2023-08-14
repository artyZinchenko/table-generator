import { Faker } from '@faker-js/faker';
import { isCity } from './utils/isCity';

export function createAdress(faker: Faker, number: number) {
    const city = isCity(number);

    let address = {};
    let string = '';

    if (city) {
        address = {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
        };
    } else {
        address = {
            street: faker.location.streetAddress(),
            village: faker.location.city(),
            state: faker.location.state(),
        };
    }

    Object.values(address).forEach((value) => {
        string += value + ', ';
    });

    return string.slice(0, string.length - 2);
}
