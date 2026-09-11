import { Component } from '@angular/core';
import { IxButton, IxInput, IxTypography } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-login-overlay',
  imports: [IxButton, IxInput, IxTypography],
  templateUrl: './login-overlay.html',
  styleUrl: './login-overlay.css',
  standalone: true,
})
export class LoginOverlay {
  username = 'john.doe@company.com';
  password = 'password123';

  onUsernameInput(event: Event): void {
    this.username = (event.target as HTMLInputElement).value;
  }

  onPasswordInput(event: Event): void {
    this.password = (event.target as HTMLInputElement).value;
  }
}
