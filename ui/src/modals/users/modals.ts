export interface IUser {
    _id: string;
    name: string;
    email: string;
    profile?: string;
};

export interface ILoginInfo {
    email: string;
    password: string;
};

export interface ISignupInfo extends ILoginInfo {
    name: string,
    confirmPassword: string,
};


