import { Faker } from '@faker-js/faker';
import { removeChar } from './mistakeTypes/removeChar';
import { addChar } from './mistakeTypes/addChar';
import { swapChars } from './mistakeTypes/swapChars';

export const addMistake = (
    string: string,
    type: number,
    index: number,
    faker: Faker
): string => {
    switch (type) {
        case 1:
            return removeChar(string, index, faker);
        case 2:
            return addChar(string, index, faker);
        case 3:
            return swapChars(string, index);
        default:
            return string;
    }
};
