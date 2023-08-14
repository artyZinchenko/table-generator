import { Table as MuiTable } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePage from './TablePage.tsx/TablePage';
import { useEffect } from 'react';
import { createPage } from '../../faker/createPage';
import Observer from './Observer/Observer';
import { useSettingsContext } from '../../context/SettingsContext';

interface Props {
    pages: Page[];
    setPages: React.Dispatch<React.SetStateAction<Page[]>>;
}

const Table = ({ pages, setPages }: Props) => {
    const { mistakesNumber, seed, language } = useSettingsContext();

    useEffect(() => {
        console.log('EFFECR', mistakesNumber);

        const newPage = createPage(seed, [], mistakesNumber, language);
        console.log(newPage);

        setPages((prevPages) => [newPage]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mistakesNumber, seed, language]);

    console.log(pages);
    return (
        <TableContainer component={Paper}>
            <MuiTable sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell align='right'>Number</TableCell>
                        <TableCell align='right'>Identification</TableCell>
                        <TableCell align='right'>Full Name</TableCell>
                        <TableCell align='right'>Address</TableCell>
                        <TableCell align='right'>Phone number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pages.map((page) => {
                        return <TablePage page={page} key={page.pageNumber} />;
                    })}
                </TableBody>
            </MuiTable>
            <Observer
                pages={pages}
                setPages={setPages}
                mistakesNumber={mistakesNumber}
                seed={seed}
                language={language}
            />
        </TableContainer>
    );
};

export default Table;
