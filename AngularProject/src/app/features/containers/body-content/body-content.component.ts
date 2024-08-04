import { Component, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrl: './body-content.component.scss'
})
export class BodyContentComponent {

  @ViewChild('btnToogle') btnToogle!: ElementRef;  
  @ViewChild('links') links!: ElementRef;

  title: string = "كافة الخدمات";
  breadCrumb: string = "كافة الخدمات/كافة الخدمات";
  contentId: string = "1"; 

  toggleLinks()
   {    
     this.links.nativeElement.classList.toggle('openlinks'); 
      }

      onContentChange(data: { title: string, breadCrumb: string, contentId: string }) {
        this.title = data.title;
        this.breadCrumb = data.breadCrumb;
        this.contentId = data.contentId;
        console.log(data.title);
      }
}
