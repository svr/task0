import { UserSelectionItem } from './user-selection-item';
import { SelectableUser } from '../../models/user';
import * as React from 'react';

export interface UserSelectionBlockProps {
    letter: string;
    users: Array<SelectableUser>;
}

export function UserSelectionBlock({ letter, users }: UserSelectionBlockProps) {
    const listItems = users.map((user) => {
        return <UserSelectionItem key={user.id} user={user} />;
    });

    return (
        <section>
            <h3>{letter}</h3>
            {users.length ? <ul>{listItems}</ul> : <div>----</div>}
        </section>
    );
}
