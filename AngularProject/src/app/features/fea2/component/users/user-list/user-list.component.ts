import { Component, OnInit } from '@angular/core';
import { Fea1Service } from '../../../fea1.service';
import { DataTableColumn } from 'src/app/shared/components/datatable/datatable.ui';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  dataModel: string = 'ali';
  cols: DataTableColumn[] =
    [{ field: 'id', header: 'id', controlType: 'textBox', dataType: 'textBox' },
    { field: 'name', header: 'name', controlType: 'textBox', dataType: 'textBox' },
    { field: 'createdAt', header: 'createdAt', controlType: 'dateTime', dataType: 'dateTime' },
    { field: 'name', header: 'name' }];
  data: any;
  cities: City[];
  checked: boolean = false;
  selectedCities!: City[];
  date: Date | undefined;
  constructor(private interactor: Fea1Service) { }

  ngOnInit() {
    this.getAllPersons();
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
  getAllPersons() {
    // this.dataModule.getUserProfile().subscribe({
    //   next: (response) => {
    //   this.data=response;
    //   }
    //  });
    //debugger
    this.interactor.getUserProfile(1).subscribe({
      next: (response) => {
        this.data = response;

      }
    });

  }
}
interface City {
  name: string,
  code: string
}