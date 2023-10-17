import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IxModule } from '@siemens/ix-angular';
import { AppComponent } from './app.component';
import { DECLARE } from './declare-component';

@NgModule({
  declarations: [AppComponent, ...DECLARE],
  imports: [BrowserModule, IxModule.forRoot(), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
