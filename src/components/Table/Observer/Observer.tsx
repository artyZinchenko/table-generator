import { useEffect, useRef } from 'react';
import { createPage } from '../../../faker/createPage';
import { LocaleDefinition } from '@faker-js/faker';

interface Props {
    pages: Page[];
    setPages: React.Dispatch<React.SetStateAction<Page[]>>;
    mistakesNumber: number;
    seed: number;
    language: LocaleDefinition;
}
const Observer = ({
    pages,
    setPages,
    mistakesNumber,
    seed,
    language,
}: Props) => {
    const observerRef = useRef<HTMLDivElement | null>(null);

    const getPages = () => {
        const newPage = createPage(seed, pages, mistakesNumber, language);

        setPages([...pages, newPage]);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                getPages();
                observer.disconnect();
            }
        });
        if (observerRef.current) observer.observe(observerRef.current);
        return () => observer.disconnect();
    });

    return <div ref={observerRef}>observer</div>;
};
export default Observer;
