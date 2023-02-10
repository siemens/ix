import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IxModule } from '@siemens/ix-angular';
import { AppComponent } from './app.component';
import { DECLARE } from './declare-component';

@NgModule({
  declarations: [AppComponent, ...DECLARE],
  imports: [BrowserModule, IxModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
