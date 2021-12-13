import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const REFRESHTOKEN_KEY = 'auth-refreshtoken';
const USER_KEY = 'auth-user';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {
    constructor() { }

    signOut(): void {
        window.localStorage.clear();
    }

    public saveToken(token: string): void {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
        this.saveUser(token.split('.')[1]);
    }

    public getToken(): string | null {
        return window.localStorage.getItem(TOKEN_KEY);
    }

    public saveRefreshToken(token: string): void {
        window.localStorage.removeItem(REFRESHTOKEN_KEY);
        window.localStorage.setItem(REFRESHTOKEN_KEY, token);
    }

    public getRefreshToken(): string | null {
        return window.localStorage.getItem(REFRESHTOKEN_KEY);
    }

    public saveUser(token: string): void {
        var user = JSON.parse(atob(token));
        window.localStorage.setItem(USER_KEY,user["unique_name"]);
    }

    public getUser(): string {
        const user = window.localStorage.getItem(USER_KEY);
        if (user) {
            return user;
        }

        return null;
    }
}
