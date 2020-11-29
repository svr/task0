import React, { createContext, useCallback, useState } from 'react';
import { SelectableUser, User } from '../models/user';
import { useStorage } from '../hooks/useStorage';

interface Props {
    children: JSX.Element[] | JSX.Element;
}

interface UserContextType {
    users: Array<SelectableUser>;
    toggleSelection: (user: SelectableUser) => void;
    setUsers: (users: Array<User>) => void;
}

export const UsersContext = createContext<UserContextType>({
    users: [],
    toggleSelection: () => {},
    setUsers: () => {},
});

export function UsersProvider(props: Props) {
    const [users, setUsers] = useState<Array<User>>([]);
    const [selectedIds, setSelectedIds] = useStorage<Array<string>>(
        '__selected_ids',
        []
    );

    const toggleSelection = useCallback(
        (user: SelectableUser) => {
            let ids: Array<string>;
            if (user.isSelected) {
                ids = selectedIds.filter((id) => id !== user.id);
            } else {
                ids = [...selectedIds, user.id];
            }
            setSelectedIds(ids);
        },
        [selectedIds, setSelectedIds]
    );

    const value = React.useMemo(() => {
        const selectableUser = users.map((user) => {
            return {
                ...user,
                isSelected: selectedIds.includes(user.id),
            };
        });

        return {
            users: selectableUser,
            setUsers,
            toggleSelection,
        };
    }, [users, selectedIds, toggleSelection]);
    return (
        <UsersContext.Provider value={value}>
            {props.children}
        </UsersContext.Provider>
    );
}
