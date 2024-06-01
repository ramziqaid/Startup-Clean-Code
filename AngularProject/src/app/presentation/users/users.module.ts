import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UsersRoutesModule } from './users.routing';
import { UserAddComponent } from './user-add/user-add.component'; 
import { SharedModule } from 'src/app/shared/shared.module'; 
import { FormsModule } from '@angular/forms';
import { DataModule } from 'src/app/data/data.module';

@NgModule({
    declarations: [UserListComponent, UserAddComponent],
    providers: [],
    imports: [
        CommonModule,
        FormsModule,
        //BrowserModule,
        UsersRoutesModule,
        SharedModule,
        DataModule
    ]
})
export class UsersModule { }
