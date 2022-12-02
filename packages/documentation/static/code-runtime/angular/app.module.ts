import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IxModule } from '@siemens/ix-angular';
import { AppComponent } from './app.component';
import ExampleComponent from './example.component';

@NgModule({
  imports: [BrowserModule, IxModule.forRoot(), FormsModule],
  declarations: [AppComponent, ExampleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
