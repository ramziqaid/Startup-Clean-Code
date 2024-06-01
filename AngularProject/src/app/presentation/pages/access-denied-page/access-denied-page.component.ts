import { Component, OnInit } from '@angular/core';
import { $animations } from 'src/app/shared/animations';

@Component({
  selector: 'app-access-denied-page',
  templateUrl: './access-denied-page.component.html',
  animations :[$animations]
})
export class AccessDeniedPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
