import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreUIModule } from '@siemens/ix-angular';
import { AGGrid } from 'src/preview-examples/aggrid';
import { ButtonGroup } from 'src/preview-examples/button-group';
import { Buttons } from 'src/preview-examples/buttons';

import { AgGridModule } from 'ag-grid-angular';
import { BasicNavigation } from 'src/preview-examples/basic-navigation';
import { Modal } from 'src/preview-examples/modal';
import { Toast } from 'src/preview-examples/toast';
import { ToastCustom } from 'src/preview-examples/toast-custom';
import { Tree } from 'src/preview-examples/tree';
import { TreeCustom } from 'src/preview-examples/tree-custom';

@NgModule({
  declarations: [
    AppComponent,
    Buttons,
    ButtonGroup,
    AGGrid,
    BasicNavigation,
    Modal,
    Toast,
    ToastCustom,
    Tree,
    TreeCustom,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreUIModule.forRoot(),
    AgGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
