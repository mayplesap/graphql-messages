export interface User {
    username: string;
    firstName: string;
    lastName: string;
}

export interface Message {
    id: number;
    body: string;
    user: {username: string};
}

