import { Injectable } from '@angular/core';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root'
})
export class TenantsService {

constructor(private cryptoService: CryptoService) { }


getTenant()
{
  var data = this.cryptoService.decryptData(sessionStorage.getItem("Tenantskey")!);
  if (data != null) {
      return JSON.parse(data);
  }
  return null;
}


setTenant(key:string)
{
  sessionStorage.setItem("Tenantskey", this.cryptoService.encryptData(key)); 
 
}
}
