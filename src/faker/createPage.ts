import { Faker, LocaleDefinition } from '@faker-js/faker';
import { createAdress } from './createData/createAdress';
import { createMistakes } from './createMistakes/createMistakes';
import { createPhoneNumber } from './createData/createPhoneNumber';

export function createPage(
    seed: number = 0,
    pages: Page[] = [],
    mistakesNumber: number = 0,
    language: LocaleDefinition
) {
    const faker = new Faker({
        locale: [language],
    });
    const pageNumber = pages.length;
    const rows = [];

    function createPerson(i: number, pageNumber: number): Person {
        const number = i + pageNumber * 10;
        faker.seed(number + seed);
        return {
            number,
            id: faker.string.uuid(),
            fullName: faker.person.fullName(),
            address: createAdress(faker, number),
            phoneNumber: createPhoneNumber(faker, number, language),
        };
    }

    for (let i = 0; i < 10; i++) {
        const input = createPerson(i, pageNumber);

        const { mistakeFullName, mistakeAddress, mistakePhone } =
            createMistakes(
                input.fullName,
                input.address,
                input.phoneNumber,
                mistakesNumber,
                seed,
                pageNumber,
                faker
            );

        rows.push({
            ...input,
            fullName: mistakeFullName,
            address: mistakeAddress,
            phoneNumber: mistakePhone,
        });
    }
    return { pageNumber, items: rows };
}
