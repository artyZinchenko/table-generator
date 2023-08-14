import { Button, Input } from '@mui/material';
import { useSettingsContext } from '../../../context/SettingsContext';

const Seed = () => {
    const { seed, setSeed } = useSettingsContext();

    const handleClick = () => {
        const num = Math.floor(Math.random() * 1000) + 1;
        setSeed(num);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        if (isNaN(Number(e.target.value))) {
            return;
        }
        if (Number(e.target.value) > 1000) {
            setSeed(1000);
            return;
        }
        setSeed(Number(e.target.value));
    };

    return (
        <div className='flex flex-start gap1'>
            <Button onClick={handleClick} variant='outlined'>
                Random Seed
            </Button>
            <Input
                sx={{ width: '2.5em' }}
                value={seed}
                size='medium'
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
};

export default Seed;
