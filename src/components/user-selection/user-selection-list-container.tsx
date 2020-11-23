import React, { useContext } from 'react';
import { UsersContext } from '../../contexts/users';
import { UserSelectionList } from './user-selection-list';

export function UserSelectionListContainer() {
    const { users } = useContext(UsersContext);
    return <UserSelectionList users={users} />;
}
