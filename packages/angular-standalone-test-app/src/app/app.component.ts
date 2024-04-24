import { Component, TemplateRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IxButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IxButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-standalone-test-app';
}
