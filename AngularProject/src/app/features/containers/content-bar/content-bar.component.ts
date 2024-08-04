import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-content-bar',
  templateUrl: './content-bar.component.html',
  styleUrl: './content-bar.component.scss'
})
export class ContentBarComponent {
  @Input() title: string = "";
  @Input() breadCrumb: string = "";
  constructor() { }
  access(): void {

  }
}
