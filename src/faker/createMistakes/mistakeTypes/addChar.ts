import { Faker } from '@faker-js/faker';

import seedrandom from 'seedrandom';

export const addChar = (string: string, index: number, faker: Faker) => {
    const rng = seedrandom((string + index).toString());
    const random = Math.floor(rng() * 2);

    const alphanumeric = () => {
        if (random < 0.7) {
            const line = faker.location.city();
            const r = Math.floor(rng() * line.length);
            return line.split('')[r];
        } else return Math.floor(rng() * 10);
    };

    return string
        .split('')
        .map((char, i) => {
            if (i === index) {
                if (random > 0.5) {
                    return `${alphanumeric()}${char}`;
                } else {
                    return `${char}${alphanumeric()}`;
                }
            } else return char;
        })
        .join('');
};
