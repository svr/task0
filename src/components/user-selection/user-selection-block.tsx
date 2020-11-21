import { UserSelectionItem } from './user-selection-item';
import { User } from '../../models/user';
import * as React from 'react';

export interface UserSelectionBlockProps {
    letter: string;
    users: Array<User>;
    toggleSelection: (user: User) => void;
}

export function UserSelectionBlock({
    letter,
    users,
    toggleSelection,
}: UserSelectionBlockProps) {
    const listItems = users.map((user) => {
        return (
            <UserSelectionItem
                key={user.id}
                user={user}
                isSelected={false}
                toggleSelection={toggleSelection}
            />
        );
    });

    return (
        <section>
            <h3>{letter}</h3>
            {users.length ? <ul>{listItems}</ul> : <div>----</div>}
        </section>
    );
}
