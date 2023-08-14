import { Box, Toolbar as MuiToolbar } from '@mui/material';
import MistakesEntry from './Mistakes/MistakesEntry';
import Seed from './Seed/Seed';
import './Toolbar.css';
import LangSelect from './LangSelect/LangSelect';
import ButtonCSV from './ButtonCSV/ButtonCSV';

interface Props {
    pages: Page[];
}

const Toolbar = ({ pages }: Props) => {
    return (
        <MuiToolbar className='flex between toolbar wrap'>
            <Box className='flex flex-start wrap'>
                <LangSelect />
                <MistakesEntry />
                <Seed />
            </Box>
            <ButtonCSV data={pages} />
        </MuiToolbar>
    );
};
export default Toolbar;
