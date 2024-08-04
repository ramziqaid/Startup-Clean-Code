import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BlockCopyPasteDirective } from './directives/block-copy-paste.directive';
import { UIComponentModule } from './components/ui-component.module';
import { TranslateModule } from '@ngx-translate/core';
import { AuthGuard } from './guards/auth.guard';
import { TokenService } from './services/token.service';
import { MessagesService } from './services/messages.service';
import { AppConfirmService } from './services/app-confirm.service';
import { SafePipe } from './pipes/safe.pipe';
import { FileManagerService } from './services/fileManager.service';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CalendarModule } from 'primeng/calendar';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { AccordionModule } from "primeng/accordion";
import { ConfirmationService, MessageService } from "primeng/api";
import { AutoCompleteModule } from "primeng/autocomplete";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DialogModule } from "primeng/dialog";
import { DialogService } from "primeng/dynamicdialog";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { RadioButtonModule } from "primeng/radiobutton";
import { SkeletonModule } from "primeng/skeleton";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { TimelineModule } from "primeng/timeline";
import { ToastModule } from "primeng/toast";
import { TreeSelectModule } from "primeng/treeselect";
import { TreeTableModule } from "primeng/treetable";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UIComponentModule,
    TranslateModule,
    ButtonModule,
    ToggleButtonModule,
    MultiSelectModule,
    CalendarModule,
    DropdownModule,
    ChipsModule,
    TabViewModule,
    AccordionModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    SkeletonModule,
    ToastModule,
    TreeTableModule,
    AutoCompleteModule,
    TreeSelectModule,
    OverlayPanelModule,
    RadioButtonModule,
    TimelineModule,
    MenuModule,
  ],
  declarations: [
    BlockCopyPasteDirective,
    SafePipe,
  ],
  providers: [
    TokenService,
    AuthGuard,
    MessagesService,
    AppConfirmService,
    FileManagerService,
    DialogService,
    ConfirmationService,
    MessageService,
  ],
  exports: [
    UIComponentModule,
    BlockCopyPasteDirective,
    TranslateModule,
    ButtonModule,
    ToggleButtonModule,
    MultiSelectModule,
    CalendarModule,
    SafePipe,
    ButtonModule,
    ToggleButtonModule,
    MultiSelectModule,
    CalendarModule,
    DropdownModule,
    ChipsModule,
    TabViewModule,
    AccordionModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    SkeletonModule,
    ToastModule,
    TreeTableModule,
    AutoCompleteModule,
    TreeSelectModule,
    OverlayPanelModule,
    RadioButtonModule,
    TimelineModule,
    MenuModule,
  ]
})
export class SharedModule { }
