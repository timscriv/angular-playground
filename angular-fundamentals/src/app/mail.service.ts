import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    `Something something something darkside`,
    `This is a message`,
    `This is another message`
  ];

  constructor() { }

}
