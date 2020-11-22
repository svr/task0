import { User } from '../../models/user';
import { letters } from '../../models/letters';
import { UserSelectionBlock } from './user-selection-block';
import React from 'react';

export interface UserSelectionListProps {
    users: Array<User>;
}

function toggleSelection() {}

export function UserSelectionList({ users }: UserSelectionListProps) {
    const groupedUsers = letters.map((letter) => {
        return {
            letter,
            users: users.filter(({ lastName }) => lastName.startsWith(letter)),
        };
    });

    const listItems = groupedUsers.map(({ letter, users }) => {
        return (
            <UserSelectionBlock
                key={letter}
                letter={letter}
                users={users}
                toggleSelection={toggleSelection}
            />
        );
    });

    return (
        <div>
            <h2>Employees</h2>
            <div className="flex-row user-selection-list">{listItems}</div>
        </div>
    );
}
