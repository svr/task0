import { User } from '../../models/user';
import React from 'react';
import { UserBirthdayItem } from './user-birthday-item';
import { months } from '../../models/months';

export interface UserBirthdayListProps {
    users: Array<User>;
}

export function UserBirthdayList({ users }: UserBirthdayListProps) {
    const groupedUsers = users
        .reduce<Array<Array<User>>>((grouped, user) => {
            const month = new Date(user.dob).getMonth();
            grouped[month] = grouped[month] || [];
            grouped[month].push(user);
            return grouped;
        }, new Array(11))
        .filter(Boolean);

    const listItems = groupedUsers.map((users, monthIndex) => {
        if (!users) {
            return null;
        }
        return (
            <section key={monthIndex}>
                <h3>{months[monthIndex]}</h3>
                <ul>
                    {users.map((user) => {
                        return (
                            <UserBirthdayItem
                                key={user.id}
                                user={user}
                            ></UserBirthdayItem>
                        );
                    })}
                </ul>
            </section>
        );
    });

    return (
        <aside>
            <h2>Employees birthday</h2>
            {users.length ? (
                <div className="flex-row user-birthday-list">{listItems}</div>
            ) : (
                <p>No selected employees</p>
            )}
        </aside>
    );
}
