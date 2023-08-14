export const swapChars = (string: string, index: number) => {
    let a = string.split('');

    for (let i = 0; i < string.length; i++) {
        if (i === index && i === string.length - 1) {
            let saved = a[i - 1];
            a[i - 1] = a[i];
            a[i] = saved;
        } else if (i === index) {
            let saved = a[i];
            a[i] = a[i + 1];
            a[i + 1] = saved;
        }
    }

    return a.join('');
};
