import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { TenantsService } from 'src/app/core/services/tenants.service';
import { IAccountInteractor } from 'src/app/data/interactors/contracts/account.interactor';
import { AccountEntity } from 'src/app/domain/entities/account.entity';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName:string="Admin";
  password:string="M123_m";
  data:AccountEntity;
  constructor(private iAccountInteractor:IAccountInteractor,
    private authService:AuthService, private router: Router,private t:TenantsService) { }

  ngOnInit(): void 
  {
      this.authService.logout();
  }

  login(){ 
    this.iAccountInteractor.login(this.userName,this.password).subscribe({
      next: (response) => { 
        if (response.succeeded) 
          {    
             
          this.data=response.data; 
          this.authService.setUserProfile(this.data); 
          this.router.navigate(["/home/dashboard"]);
          }
     },
     error: () => {
       //this.messageService.showError('message.unhandledError');
       //this.accountService.setUserProfile(null);
     },
    }); 
  }

}
