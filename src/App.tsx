import React, { useEffect } from 'react';
import { useFetch } from './hooks/useFetch';
import { User } from './models/user';
import { UserSelectionList } from './components/user-selection/user-selection-list';
import { UserBirthdayList } from './components/user-birthday/user-birthday-list';

function App() {
    const [{ data, isLoading, error }, doFetch] = useFetch<Array<User>>(
        'https://yalantis-react-school-api.yalantis.com/api/task0/users'
    );

    useEffect(() => {
        doFetch();
    }, [doFetch]);

    return (
        <main>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {!error && data && (
                <div className="flex-row app-container">
                    <UserSelectionList users={data} />
                    <UserBirthdayList users={data} />
                </div>
            )}
        </main>
    );
}

export default App;
