import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutesModule } from './users.routing';
import { UserAddComponent } from './user-add/user-add.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
    declarations: [UserListComponent, UserAddComponent],
    providers: [],
    imports: [
        CommonModule,
        FormsModule,
        UsersRoutesModule,
        SharedModule,
    ]
})
export class UsersModule { }
