import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { useSettingsContext } from '../../../context/SettingsContext';
import { SyntheticEvent, useState } from 'react';
import { OutlinedInput } from '@mui/material';
import { type } from 'os';

const Input = styled(MuiInput)`
    width: 42px;
`;

const MistakesEntry = () => {
    const [sliderValue, setSliderValue] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const { mistakesNumber, setMistakesNumber } = useSettingsContext();

    const handleSliderChange = (
        event: Event | SyntheticEvent<Element, Event>,
        newValue: number | number[]
    ) => {
        if (Array.isArray(newValue)) return;
        const cappedValue = newValue > 10 ? 10 : newValue;
        setSliderValue(cappedValue);
    };

    const handleSliderCommited = (
        event: Event | SyntheticEvent<Element, Event>,
        newValue: number | number[]
    ) => {
        if (Array.isArray(newValue)) return;

        setInputValue(newValue.toString());
        setMistakesNumber(newValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const parsed = parseFloat(event.target.value);
        if (!event.target.value || isNaN(Number(event.target.value))) {
            setInputValue('0');
            setMistakesNumber(0);
            return;
        }

        if (parsed > 1000) {
            setInputValue('1000');
            setMistakesNumber(1000);
            return;
        }
        setInputValue(parsed.toString());
        setMistakesNumber(parsed);
        const cappedValue = parsed > 10 ? 10 : parsed;
        setSliderValue(cappedValue);
    };

    return (
        <Box sx={{ width: 350 }}>
            <Grid container spacing={2} alignItems='center'>
                <Grid item xs>
                    <Slider
                        aria-label='Temperature'
                        value={mistakesNumber > 10 ? 10 : sliderValue}
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
                        sx={{ width: '5.5em' }}
                        value={inputValue}
                        size='medium'
                        type='number'
                        onChange={handleInputChange}
                        inputProps={{
                            step: 0.25,
                            max: 1000,
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default MistakesEntry;
