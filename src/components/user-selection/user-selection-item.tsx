import React from 'react';
import { User } from '../../models/user';

export interface UserSelectionItemProps {
    user: User;
    isSelected: boolean;
    toggleSelection: (user: User) => void;
}

export function UserSelectionItem({
    user,
    isSelected,
    toggleSelection,
}: UserSelectionItemProps) {
    return (
        <li>
            <label>
                {user.lastName}&nbsp;{user.firstName}
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleSelection(user)}
                />
            </label>
        </li>
    );
}
