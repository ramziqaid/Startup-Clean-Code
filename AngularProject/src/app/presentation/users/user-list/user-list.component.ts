import { Component, OnInit } from '@angular/core'; 
import { IAdminUserInteractor } from 'src/app/data/interactors/contracts/adminUser.interactor';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  dataModel: string = 'ali';
  cols:string[]=['id','createdAt','name'];
  data:any;
  
  constructor( private interactor: IAdminUserInteractor) { }

  ngOnInit() 
  {
    this.getAllPersons();
  }
  getAllPersons(){ 
    // this.dataModule.getUserProfile().subscribe({
    //   next: (response) => {
    //   this.data=response;
    //   }
    //  });
//debugger
     this.interactor.getOne(1).subscribe({
      next: (response) => {
      this.data=response;
      }
     });
        
}
}
