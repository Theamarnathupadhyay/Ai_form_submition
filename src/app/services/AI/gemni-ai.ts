import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GemniAiServices {

  // private baseUrl = 'http://localhost:3400/';
private baseUrl = 'https://probable-space-potato-q9wq94xqj55h4vj9-3400.app.github.dev/';
  private gemniAi = 'ai/chat';

  private aiChatUrl = `${this.baseUrl}${this.gemniAi}`;

  constructor(private http: HttpClient) {}

  sendMessage(question: string) {
    return this.http.post(this.aiChatUrl, {
      userQuestion: question
    });
  }
}
