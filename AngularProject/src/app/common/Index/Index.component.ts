import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Index',
  templateUrl: './Index.component.html',
  styleUrls: ['./Index.component.css']
})
export class IndexComponent implements OnInit {




  constructor(private router: Router) { }

  navigateToFea1() {

    this.router.navigate(['/service/fea1']);
  }
  ngOnInit() {
  }

}
