import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'src/app/_models/message';
<<<<<<< HEAD
=======
import { MembersService } from 'src/app/_services/members.service';
>>>>>>> c656a233555a5b04503e0351f85cf57b0fc6d6ea
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @ViewChild('messageForm') messageForm: NgForm;
  @Input() messages: Message[];
  @Input() username: string;
  messageContent: string;

<<<<<<< HEAD
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

  }

  sendMessage() {
    this.messageService.sendMessage(this.username, this.messageContent).subscribe(message => {
      this.messages.push(message);
=======
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageService.sendMessage(this.username, this.messageContent).then(() => {
>>>>>>> c656a233555a5b04503e0351f85cf57b0fc6d6ea
      this.messageForm.reset();
    })
  }

}
