import Toolbar from './components/Toollbar/Toolbar';
import Table from './components/Table/Table';
import { SettingsContextProvider } from './context/SettingsContext';
import { useState } from 'react';

function App() {
    const [pages, setPages] = useState<Page[]>([]);

    return (
        <div className='App'>
            <SettingsContextProvider>
                <Toolbar pages={pages} />
                <Table pages={pages} setPages={setPages} />
            </SettingsContextProvider>
        </div>
    );
}

export default App;
