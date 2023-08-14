import { Button } from '@mui/material';
import { CSVLink } from 'react-csv';

interface Props {
    data: Page[];
}

const ExportButton = ({ data }: Props) => {
    const csvData = data
        .flat()
        .map((obj) => obj.items)
        .flat();

    const headers = [
        { label: 'number', key: 'number' },
        { label: 'id', key: 'id' },
        { label: 'fullName', key: 'fullName' },
        { label: 'phoneNumber', key: 'phoneNumber' },
        { label: 'address', key: 'address' },
    ];

    return (
        <Button variant='contained'>
            <CSVLink
                data={csvData}
                headers={headers}
                filename={'data.csv'}
                style={{ color: 'inherit', textDecoration: 'none' }}
            >
                Export to CSV
            </CSVLink>
        </Button>
    );
};

export default ExportButton;
