import React from 'react';
import { SelectableUser } from '../../models/user';
import { UsersContext } from '../../contexts/users';

export interface UserSelectionItemProps {
    user: SelectableUser;
}

export function UserSelectionItem({ user }: UserSelectionItemProps) {
    const { toggleSelection } = React.useContext(UsersContext);

    return (
        <li>
            <label>
                {user.lastName}&nbsp;{user.firstName}
                <input
                    type="checkbox"
                    checked={user.isSelected || false}
                    onChange={() => toggleSelection(user)}
                />
            </label>
        </li>
    );
}
