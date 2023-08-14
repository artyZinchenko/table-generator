/* eslint-disable @typescript-eslint/no-empty-function */
import { en, LocaleDefinition } from '@faker-js/faker';
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from 'react';

interface SettingsContextValue {
    seed: number;
    mistakesNumber: number;
    setSeed: Dispatch<SetStateAction<number>>;
    setMistakesNumber: Dispatch<SetStateAction<number>>;
    language: LocaleDefinition;
    setLanguage: Dispatch<SetStateAction<LocaleDefinition>>;
}

const initialData = {
    seed: 0,
    setSeed: () => {},
    mistakesNumber: 0,
    setMistakesNumber: () => {},
    language: en,
    setLanguage: () => {},
};

const SettingsContext = createContext<SettingsContextValue>(initialData);

interface Props {
    children: ReactNode;
}

export const SettingsContextProvider = ({ children }: Props) => {
    const [seed, setSeed] = useState<number>(0);
    const [mistakesNumber, setMistakesNumber] = useState<number>(0);
    const [language, setLanguage] = useState<LocaleDefinition>(en);

    return (
        <SettingsContext.Provider
            value={{
                seed,
                setSeed,
                mistakesNumber,
                setMistakesNumber,
                language,
                setLanguage,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettingsContext = () => useContext(SettingsContext);
