export interface User {
    id: string;
    firstName: string;
    lastName: string;
    dob: string;
}

export interface SelectableUser extends User {
    isSelected: boolean;
}
