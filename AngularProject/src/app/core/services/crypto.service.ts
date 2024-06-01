import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class CryptoService {
   private readonly encryptSecretKey: string = "AppSettingsService.appSettings?.apiUrl";
    encryptData(data: any) : string{
        let encJson = CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString()
        let encData = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encJson))
        return encData
      }
    
    decryptData(data: string) {
        if(data !=null)
        {
        let decData = CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8)
        let bytes = CryptoJS.AES.decrypt(decData, this.encryptSecretKey).toString(CryptoJS.enc.Utf8)
        return bytes;
        }
        return null;
    }
}