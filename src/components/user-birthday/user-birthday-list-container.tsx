import React, { useContext, useMemo } from 'react';
import { UsersContext } from '../../contexts/users';
import { UserBirthdayList } from './user-birthday-list';

export function UserBirthdayListContainer() {
    const { users } = useContext(UsersContext);
    const selectedUsers = useMemo(() => {
        return users.filter((user) => user.isSelected);
    }, [users]);

    return <UserBirthdayList users={selectedUsers} />;
}
