import { createIndexes } from './createIndexes';
import { addMistake } from './addMistake';
import { Faker } from '@faker-js/faker';

export const createMistakes = (
    fullName: string,
    address: string,
    phoneNumber: string,
    mistakesNumber: number,
    seed: number,
    pageNumber: number,
    faker: Faker
) => {
    const mistakes = createIndexes(
        fullName,
        address,
        phoneNumber,
        mistakesNumber,
        seed,
        pageNumber
    );
    let mistakeFullName = fullName;
    let mistakeAddress = address;
    let mistakePhone = phoneNumber;

    for (const mistake of mistakes) {
        const type = mistake[1];
        if (mistake[0] < fullName.length) {
            const index = mistake[0];
            mistakeFullName = addMistake(mistakeFullName, type, index, faker);
        } else if (mistake[0] < address.length + fullName.length) {
            const index = mistake[0] - phoneNumber.length;
            mistakeAddress = addMistake(mistakeAddress, type, index, faker);
        } else {
            const index = mistake[0] - phoneNumber.length - address.length;
            mistakePhone = addMistake(mistakePhone, type, index, faker);
        }
    }

    return { mistakeFullName, mistakeAddress, mistakePhone };
};
