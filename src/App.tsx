import React, { useEffect } from 'react';
import { useFetch } from './hooks/useFetch';
import { User } from './models/user';
import { UserSelectionList } from './components/user-selection/user-selection-list';

function App() {
    const [{ data, isLoading, error }, doFetch] = useFetch<Array<User>>(
        'https://yalantis-react-school-api.yalantis.com/api/task0/users'
    );

    useEffect(() => {
        doFetch();
    }, []);

    return (
        <main>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!error && data && <UserSelectionList users={data} />}
        </main>
    );
}

export default App;
