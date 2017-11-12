import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = [];

  constructor() { }

  addMessage(msg: string):void{
    this.messages.push(msg);
  }

  clear():void{
    this.messages.length = 0;
  }
}
