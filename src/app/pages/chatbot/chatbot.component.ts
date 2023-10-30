import { Component, OnInit } from '@angular/core';
import { ChatbotService } from 'src/shared/services/chatbot/chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  isChatbotVisible = false;
  prompt = ''
  content = ''

  constructor(private seriviceChat: ChatbotService){

  }

  ngOnInit(): void {
   
  }

  toggleChatbot() {
    this.isChatbotVisible = !this.isChatbotVisible;
  }

  closeChatbot() {
    this.isChatbotVisible = false;
  }

  onSubmit(): void{
    this.content = 'esperando respuesta....'
    this.seriviceChat.getContent(this.prompt).subscribe(
      data =>{
        this.content = data.content;
        this.prompt = ''
      },
      err =>{
        this.content = err.error;
      }
      
    );
  }
}
