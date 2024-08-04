import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MenuItem, MessageService, SelectItem } from "primeng/api";
import { TableRowSelectEvent } from "primeng/table";
import { $animations } from "src/app/shared/animations";

interface People {
  firstname: string;
  management: string;
  email: string;
}

@Component({
  selector: 'app-ui-components',
  templateUrl: './ui-components.component.html',
  styleUrls: ['./ui-components.component.scss'],
  animations: [$animations]
})
export class UiComponentsComponent implements OnInit {
  cities: City[] | undefined;

  selectedCity: City | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
} interface City {
  name: string;
  code: string;
}
