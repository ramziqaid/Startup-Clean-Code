import { Injectable } from '@angular/core';  
import { AuthService } from 'src/app/core/services/auth.service';
import { IAccountInteractor } from 'src/app/data/interactors/contracts/account.interactor';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor( private authService:AuthService, private iAccountInteractor:IAccountInteractor ) 
    {}

  async tryRefreshingTokens(): Promise<boolean> {
    // Try refreshing tokens using refresh token  
    
    if(this.authService.getUserProfile()==null)return false;
    const token: string =this.authService.getUserProfile()?.accessToken ;
    const refreshToken: string = this.authService.getUserProfile()?.refreshToken.tokenString; 
    if (!token || !refreshToken) {      
      return false;
    }
 
    try {
        let isRefreshSuccess = false;
        return new Promise<boolean>((resolve, reject) => {
           //var token=this.authService.getUserProfile();
            this.RefreshToken(token,refreshToken)
            .toPromise().then((response) => { 
                if (response?.succeeded) {
                    this.authService.setUserProfile(response?.data);
                    isRefreshSuccess =  true
                  } else { 
                    console.log(response?.errorMessage);
                    isRefreshSuccess =   false;
                  } 
                  resolve(isRefreshSuccess);
            }).catch((response: any) => { 
                console.log(`Errror : ${JSON.stringify(response)}`);                
                resolve(false);
            });
        }); 
        
    }
    catch (ex) {               
     return false;
    }
  }

  private RefreshToken(AccessToken: string, RefreshToken: string) {  
    return this.iAccountInteractor.RefreshToken(AccessToken,RefreshToken);
  }
}
