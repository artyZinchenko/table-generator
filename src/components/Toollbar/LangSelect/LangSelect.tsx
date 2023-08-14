import {
    FormControl,
    Select,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material';
import { useSettingsContext } from '../../../context/SettingsContext';
import { pl, uk, en, LocaleDefinition } from '@faker-js/faker';
import { useState } from 'react';

const LangSelect = () => {
    const { setLanguage } = useSettingsContext();
    const [index, setIndex] = useState(1);

    interface ObjectType {
        1: LocaleDefinition;
        2: LocaleDefinition;
        3: LocaleDefinition;
    }

    const table: ObjectType = {
        1: en,
        2: pl,
        3: uk,
    };

    const handleChange = (e: SelectChangeEvent<any>) => {
        const n = e.target.value;
        setIndex(n);
        setLanguage(table[n as keyof ObjectType]);
    };

    return (
        <FormControl>
            <Select
                value={index}
                onChange={(e) => handleChange(e)}
                sx={{ width: '7em' }}
            >
                <MenuItem value={1}>USA</MenuItem>
                <MenuItem value={2}>Poland</MenuItem>
                <MenuItem value={3}>Ukraine</MenuItem>
            </Select>
        </FormControl>
    );
};
export default LangSelect;
