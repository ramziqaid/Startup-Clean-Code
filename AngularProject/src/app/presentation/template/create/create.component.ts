import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITemplateInteractor } from 'src/app/data/interactors/contracts/template.interactor';
import { TemplateModel } from 'src/app/data/model/template.model';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateTempaletComponent extends BaseComponent implements OnInit {
  temp=new TemplateModel(); 
  constructor(private router: Router,private interactor: ITemplateInteractor)  { 
    super();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.interactor.save(this.temp).subscribe({
      next: (response) => {
        if (response.succeeded)
         {
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

  onUpload(file:File){
    this.temp.logoFile=file;
  }
}
