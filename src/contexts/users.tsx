import React, { createContext, useCallback } from 'react';
import { SelectableUser } from '../models/user';

interface Props {
    children: JSX.Element[] | JSX.Element;
}

interface UserContextType {
    users: Array<SelectableUser>;
    toggleSelection: (user: SelectableUser) => void;
    setUsers: (users: Array<SelectableUser>) => void;
}

export const UsersContext = createContext<UserContextType>({
    users: [],
    toggleSelection: () => {},
    setUsers: () => {},
});

export function UsersProvider(props: Props) {
    const [users, setUsers] = React.useState<Array<SelectableUser>>([]);

    const toggleSelection = useCallback(
        ({ id }: SelectableUser) => {
            const updatedUsers = users.map((user) => {
                if (user.id === id) {
                    return {
                        ...user,
                        isSelected: !user.isSelected,
                    };
                }
                return user;
            });
            setUsers(updatedUsers);
        },
        [users]
    );

    const value = React.useMemo(() => ({ users, setUsers, toggleSelection }), [
        users,
        toggleSelection,
    ]);
    return (
        <UsersContext.Provider value={value}>
            {props.children}
        </UsersContext.Provider>
    );
}
