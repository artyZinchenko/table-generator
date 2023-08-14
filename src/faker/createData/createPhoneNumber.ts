import { Faker, LocaleDefinition, en, pl, uk } from '@faker-js/faker';
import seedrandom from 'seedrandom';

export const createPhoneNumber = (
    faker: Faker,
    number: number,
    language: LocaleDefinition
) => {
    const rng = seedrandom(number.toString());
    const random = Math.floor(rng() * 3);

    switch (language) {
        case uk:
            return ukrain(faker, random);
        case pl:
            return polish(faker, random);
        case en:
            return english(faker, random);
        default:
            return english(faker, random);
    }
};

function english(faker: Faker, random: number) {
    if (random < 1) {
        return faker.phone.number('+1-###-###-####');
    } else if (random < 2) {
        return faker.phone.number('1-###-###-####');
    } else {
        return faker.phone.number('###-###-####');
    }
}
function ukrain(faker: Faker, random: number) {
    if (random < 1.5) {
        return faker.phone.number('+380-##-###-##-##');
    } else {
        return faker.phone.number('###-##-##');
    }
}
function polish(faker: Faker, random: number) {
    if (random < 1.5) {
        return faker.phone.number('+48-##-###-####');
    } else {
        return faker.phone.number('##-###-####');
    }
}
