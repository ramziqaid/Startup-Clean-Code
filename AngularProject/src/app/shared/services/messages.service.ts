import { Injectable } from '@angular/core'; 
import { ApiResponseModel } from 'src/app/core/models/api-response.model'; 
import { TranslateService } from '@ngx-translate/core'; 
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(  private translate: TranslateService) { }

  private show(icon: string, msg: string, title?: string, key?: string) {
    Swal.fire({
      title: title,
      text: msg,
      icon: 'error',
      confirmButtonText: 'Cool'
    });
     
    // Swal.fire({
    //   title: title,
    //   text: msg,
    //   icon: "question"
    // });
 
  }

  // showErrorMessage(errorResponseModel: ApiResponseModel): void {
  //   let detail: string = '';
  //   detail = errorResponseModel.errorCode == "5001" ? (this.translate.getDefaultLang() == 'ar' ? 'حدث خطأ ما يرجى الاتصال بمدير النظام' : 'حدث خطأ ما يرجى الاتصال بمدير النظام')?.toString() || '' :
  //     (this.translate.getDefaultLang() == 'ar' ? errorResponseModel.errorMessage.arabic : errorResponseModel.errorMessage.english)?.toString() || ''

  //   if (errorResponseModel.errorCode == "1069") {
  //     this.dialogService.open(DynamicDialogComponent, {

  //       style: { 'text-align': 'center', 'min-width': '20%' },
  //       header: this.translate.instant('message.unhandledError'),
  //       data: { message: (this.translate.getDefaultLang() == 'ar' ? errorResponseModel.errorMessage.arabic : errorResponseModel.errorMessage.english)?.toString() || '' }
  //     });
  //   }
  //   else {
  //     this.messageService.add({
  //       severity: MessageTypes.Error,
  //       summary: (this.translate.getDefaultLang() == 'ar' ? 'خطأ' : 'Error')?.toString(),
  //       detail: detail,
  //     });
  //   }
  // }
  // showSuccessMessage(errorResponseModel: ApiResponseModel): void {
  //   this.messageService.add({
  //     severity: MessageTypes.Success,
  //     summary: (this.translate.getDefaultLang() == 'ar' ? 'Success' : 'Success')?.toString(),
  //     detail: (this.translate.getDefaultLang() == 'ar' ? errorResponseModel.errorMessage.arabic : errorResponseModel.errorMessage.english)?.toString(),
  //   });
  // }
  // showInfoMessage(errorResponseModel: ApiResponseModel): void {
  //   this.messageService.add({
  //     severity: MessageTypes.Info,
  //     summary: (this.translate.getDefaultLang() == 'ar' ? 'معلومة' : 'Information')?.toString(),
  //     detail: (this.translate.getDefaultLang() == 'ar' ? errorResponseModel.errorMessage.arabic : errorResponseModel.errorMessage.english)?.toString(),
  //   });
  // }
  // showWarnMessage(errorResponseModel: ApiResponseModel): void {
  //   this.messageService.add({
  //     severity: MessageTypes.Warn,
  //     summary: (this.translate.getDefaultLang() == 'ar' ? 'تنبيه' : 'Warning')?.toString(),
  //     detail: (this.translate.getDefaultLang() == 'ar' ? errorResponseModel.errorMessage.arabic : errorResponseModel.errorMessage.english)?.toString(),
  //   });
  // }

  showSuccess(msg: string, title?: string, key?: string): void { 

    this.translate.get(msg).subscribe({
      next: (text: string) => {
        if (text) {
          Swal.fire({
            title: title,
            text: text,
            icon: "success"
          });
          //this.show(MessageTypes.Success, text, title, key);
        }
      },
      error: () => {
        Swal.fire({
          title: title,
          text: msg,
          icon: "success"
        });
        //this.show(MessageTypes.Success, msg, title, key);
      },
    });
  }

  showError(msg: string, title?: string, key?: string): void {
    this.translate.get(msg).subscribe({
      next: (text: string) => {
        if (text) {
          Swal.fire({
            title: title,
            text: text,
            icon: "error"
          });
         // this.show(MessageTypes.Error, text, title, key);
        }
      },
      error: () => {
        Swal.fire({
          title: title,
          text: msg,
          icon: "error"
        });
        //this.show(MessageTypes.Error, msg, title, key);
      },
    });
  }

showInfo(msg: string, title?: string, key?: string): void {
    this.translate.get(msg).subscribe({
      next: (text: string) => {
        if (text) {
          Swal.fire({
            title: title,
            text: text,
            icon: "info"
          });
         // this.show(MessageTypes.Info, text, title, key);
        }
      },
      error: () => {
        Swal.fire({
          title: title,
          text: msg,
          icon: "info"
        });
        //this.show(MessageTypes.Info, msg, title, key);
      },
    });
  }

  showWarn(msg: string, title?: string, key?: string): void {
    this.translate.get(msg).subscribe({
      next: (text: string) => {
        if (text) {
          Swal.fire({
            title: title,
            text: text,
            icon: "warning"
          });
          //this.show(MessageTypes.Warn, text, title, key);
        }
      },
      error: () => {
        Swal.fire({
          title: title,
          text: msg,
          icon: "warning"
        });
      },
    });
  }
confirm(){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error"
      });
    }
  });
}
  // addAll(messages: Message[]): void {
  //   this.messageService.addAll(messages);
  // }

  // clear(key?: string): void {
  //   this.messageService.clear(key);
  // }

 
}

enum MessageTypes {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warn = 'warn',
}
