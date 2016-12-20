import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    { id: 0, text: `Something something something darkside` },
    { id: 1, text: `This is a message` },
    { id: 2, text: `This is another message` }
  ];

  update(id, text) {
    this.messages = this.messages.map(m => m.id === id ? { id, text } : m);
  }

  constructor() { }

}
