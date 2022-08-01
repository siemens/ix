import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreUIModule } from '@siemens/ix-angular/dist';
import { ButtonGroup } from 'src/preview-examples/button-group';
import { Buttons } from 'src/preview-examples/buttons';

@NgModule({
  declarations: [AppComponent, Buttons, ButtonGroup],
  imports: [BrowserModule, AppRoutingModule, CoreUIModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
