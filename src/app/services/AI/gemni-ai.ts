import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GemniAiServices {

  private baseUrl = 'http://localhost:3400/';
  private gemniAi = 'ai/chat';

  private aiChatUrl = `${this.baseUrl}${this.gemniAi}`;

  constructor(private http: HttpClient) {}

  sendMessage(question: string) {
    return this.http.post(this.aiChatUrl, {
      userQuestion: question
    });
  }
}
