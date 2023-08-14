import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

interface Props {
    page: Page;
}

const TablePage = ({ page }: Props) => {
    return (
        <>
            {page.items.map((row) => (
                <TableRow
                    key={row.id}
                    sx={{
                        '&:last-child td, &:last-child th': {
                            border: 0,
                        },
                    }}
                >
                    <TableCell align='right'>{row.number}</TableCell>
                    <TableCell align='right'>{row.id}</TableCell>
                    <TableCell align='right'>{row.fullName}</TableCell>
                    <TableCell align='right'>{row.address}</TableCell>
                    <TableCell align='right'>{row.phoneNumber}</TableCell>
                </TableRow>
            ))}
        </>
    );
};

export default TablePage;
