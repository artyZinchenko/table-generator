import { Faker } from '@faker-js/faker';
import { addChar } from './addChar';

export const removeChar = (string: string, index: number, faker: Faker) => {
    if (string.length < 4) {
        return addChar(string, index, faker);
    }
    return string
        .split('')
        .map((char, i) => {
            if (i === index) {
                return '';
            }
            return char;
        })
        .join('');
};
