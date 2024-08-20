import { BaseEntity } from "./baseEntity";

export interface AccountEntity extends  BaseEntity<string>{ 
    username: string;
    fullNameArabic: string;
    fullNameEnglish: string; 
    accessToken:string;
    refreshToken:string; 
}
 
// export interface refreshToken
// {
//     userName : string;
//     tokenString : string;
//     expireAt : Date;
// }
