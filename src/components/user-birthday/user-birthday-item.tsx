import React from 'react';
import { User } from '../../models/user';
import { months } from '../../models/months';

export interface UserBirthdayItemProps {
    user: User;
}

function formatDate(dt: string): string {
    const date = new Date(dt);

    return (
        date.getDate() +
        ' ' +
        months[date.getMonth()] +
        ', ' +
        date.getFullYear()
    );
}

export function UserBirthdayItem({ user }: UserBirthdayItemProps) {
    return (
        <li>
            {user.lastName}&nbsp;{user.firstName}&nbsp;&ndash;&nbsp;
            {formatDate(user.dob)}&nbsp;year
        </li>
    );
}
