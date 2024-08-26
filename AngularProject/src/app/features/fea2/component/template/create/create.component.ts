import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateModel } from 'src/app/features/fea1/model/template.model';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { Fea1Service } from '../../../fea2.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateTempaletComponent extends BaseComponent implements OnInit {
  temp = new TemplateModel();
  constructor(private router: Router, private interactor: Fea1Service) {
    super();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.interactor.insertTemplate(this.temp).subscribe({
      next: (response) => {
        if (response.succeeded) {
          console.warn("save");
        }
      },
      error: () => {
        //this.messageService.showError('message.unhandledError');
      },
    });
    // Handle form submission
    console.log('Form submitted:', this.temp);
  }

  onUpload(file: File) {
    this.temp.logoFile = file;
  }
}
