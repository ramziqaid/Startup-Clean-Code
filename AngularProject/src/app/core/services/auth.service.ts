import { Injectable } from '@angular/core';
import { CryptoService } from './crypto.service';
import { AccountEntity } from 'src/app/domain/entities/account.entity';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(  private cryptoService: CryptoService,private router: Router) { }

setUserProfile(accountModel: AccountEntity | null) 
{
  sessionStorage.setItem("setUserProfile", this.cryptoService.encryptData(accountModel));
  if (accountModel != null)
      sessionStorage.setItem("ULI", JSON.stringify(true));
}

getUserProfile()  
{ 
  var data = this.cryptoService.decryptData(sessionStorage.getItem("setUserProfile")!);
  if (data != null) {
      return JSON.parse(data);
  }
  return null;
}

getLoggedInUserName(): string 
{ 
  let accModel: AccountEntity;
  accModel = this.getUserProfile();
  return accModel.username;
}

isUserLoggedIn():boolean {
  var data = sessionStorage.getItem('ULI');
  if (data != null)
      return JSON.parse(data);
  return false;
}

 

logout() {
  sessionStorage.clear()
  sessionStorage.setItem("ULI", JSON.stringify(false));
  this.router.navigate(['login']);
}
}
