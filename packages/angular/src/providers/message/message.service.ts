import { Injectable } from '@angular/core';
import { MessageService as BaseMessageService } from '@siemens/ix-angular/common';

@Injectable({
  providedIn: 'root',
})
export class MessageService extends BaseMessageService {}
