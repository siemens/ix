import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IxModule } from '@siemens/ix-angular';
import { AgGridModule } from 'ag-grid-angular';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppComponent } from './app.component';
import { DECLARE } from './declare-component';

@NgModule({
  declarations: [AppComponent, ...DECLARE],
  imports: [
    BrowserModule,
    IxModule.forRoot(),
    FormsModule,
    AgGridModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
