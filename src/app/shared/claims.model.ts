export interface ClaimsModel {
    unique_name: string;
    role:        string;
    email:       string;
    nbf:         number;
    exp:         number;
    iat:         number;
}