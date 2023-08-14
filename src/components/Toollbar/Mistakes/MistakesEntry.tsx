import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { useSettingsContext } from '../../../context/SettingsContext';
import { SyntheticEvent, useState } from 'react';

const Input = styled(MuiInput)`
    width: 42px;
`;

const MistakesEntry = () => {
    const [value, setValue] = useState(0);
    const { mistakesNumber, setMistakesNumber } = useSettingsContext();

    const handleSliderChange = (
        event: Event | SyntheticEvent<Element, Event>,
        newValue: number | number[]
    ) => {
        if (Array.isArray(newValue)) return;
        const cappedValue = newValue > 10 ? 10 : newValue;
        setValue(cappedValue);
    };

    const handleSliderCommited = (
        event: Event | SyntheticEvent<Element, Event>,
        newValue: number | number[]
    ) => {
        if (Array.isArray(newValue)) return;

        setMistakesNumber(newValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Number(event.target.value))) {
            return;
        }
        setMistakesNumber(Number(event.target.value));
    };

    return (
        <Box sx={{ width: 300 }}>
            <Grid container spacing={2} alignItems='center'>
                <Grid item xs>
                    <Slider
                        aria-label='Temperature'
                        value={value > 10 ? 10 : value}
                        onChange={handleSliderChange}
                        valueLabelDisplay='auto'
                        onChangeCommitted={handleSliderCommited}
                        step={0.25}
                        min={0}
                        max={10}
                    />
                </Grid>
                <Grid item>
                    <Input
                        sx={{ width: '2.5em' }}
                        value={mistakesNumber}
                        size='medium'
                        onChange={handleInputChange}
                        inputProps={{
                            step: 10,
                            min: 0,
                            max: 1000,
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default MistakesEntry;
