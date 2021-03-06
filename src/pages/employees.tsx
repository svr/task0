import React, { useContext, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { User } from '../models/user';
import { UsersContext } from '../contexts/users';
import { UserSelectionListContainer } from '../components/user-selection/user-selection-list-container';
import { UserBirthdayListContainer } from '../components/user-birthday/user-birthday-list-container';

export function EmployeesPage() {
    const [{ data, isLoading, error }, doFetch] = useFetch<Array<User>>(
        'https://yalantis-react-school-api.yalantis.com/api/task0/users'
    );
    const { setUsers } = useContext(UsersContext);

    useEffect(() => {
        doFetch();
    }, [doFetch]);

    useEffect(() => {
        if (data) {
            setUsers(data);
        }
    }, [setUsers, data]);

    return (
        <main>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {!error && data && (
                <div className="flex-row app-container">
                    <UserSelectionListContainer />
                    <UserBirthdayListContainer />
                </div>
            )}
        </main>
    );
}
