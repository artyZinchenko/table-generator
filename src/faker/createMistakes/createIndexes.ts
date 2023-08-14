import seedrandom from 'seedrandom';

export const createIndexes = (
    fullName: string,
    address: string,
    phoneNumber: string,
    mistakesNumber: number,
    seed: number,
    pageNumber: number
) => {
    const length = fullName.length + address.length + phoneNumber.length;
    const rng = seedrandom((seed + pageNumber + length).toString());

    const decimal = mistakesNumber % 1;
    let totlaMistakes = mistakesNumber;

    if (decimal > rng()) {
        totlaMistakes++;
    }

    const mistakes = [];

    for (let i = 0; i < totlaMistakes; i++) {
        const position = Math.floor(rng() * length);
        const type = Math.floor(rng() * 3) + 1;
        mistakes.push([position, type]);
    }

    return mistakes;
};
