import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IxModule } from '@siemens/ix-angular';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppComponent } from './app.component';
import { DECLARE } from './declare-component';

@NgModule({
  declarations: [AppComponent, ...DECLARE],
  imports: [
    BrowserModule,
    IxModule.forRoot(),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
