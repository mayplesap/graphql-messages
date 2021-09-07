export interface User {
    username: string;
    first_name: string;
    last_name: string;
}

export interface Message {
    id: number;
    body: string;
    user: {username: string};
}

