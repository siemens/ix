import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IxModule } from '@siemens/ix-angular';
import { AppComponent } from './app.component';
import ExampleComponent from './example.component';

@NgModule({
  declarations: [AppComponent, ExampleComponent],
  imports: [BrowserModule, IxModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
