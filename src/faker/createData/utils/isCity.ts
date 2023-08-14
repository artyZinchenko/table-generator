import seedrandom from 'seedrandom';

export const isCity = (number: number): boolean => {
    const rng = seedrandom(number.toString());

    if (rng() > 0.6) return false;

    return true;
};
