import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GemniAiServices } from '../services/AI/gemni-ai';

@Component({
  selector: 'app-gemni-ai',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gemni-ai.html',
  styleUrls: ['./gemni-ai.css'],
})
export class GemniAi {

//   aiResponse: string | null = null;
// isLoading = false;

messages: { role: 'user' | 'ai' | 'typing', text: string, name?: string }[] = [];

userName = 'Amarnath Upadhyay';
aiName = 'Gemini AI';


@ViewChild('scrollBox') scrollBox!: ElementRef;

  constructor(
    private gemniAiService: GemniAiServices,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {}

  scrollToBottom() {
    if (this.scrollBox) {
      setTimeout(() => {
        this.scrollBox.nativeElement.scrollTop = this.scrollBox.nativeElement.scrollHeight;
      }, 0);
    }
  }

//   chatWithAi(userQuestion: string) {
//   this.aiResponse = "Thinking...";

//   this.gemniAiService.sendMessage(userQuestion).subscribe({
//     next: (res: any) => {
//       this.aiResponse = res?.reply || "No reply from AI";
//       this.cdr.markForCheck();
//     },

//     error: (err) => {
//       console.error(err);
//       this.aiResponse = err?.error?.message;
//       this.cdr.markForCheck();
//     }
//   });
// }


chatWithAi(userQuestion: string) {

  if (!userQuestion?.trim()) return;

  // USER MESSAGE
  this.messages.push({
    role: 'user',
    text: userQuestion,
    name: this.userName
  });

  this.scrollToBottom();

  // TYPING INDICATOR
  const typingMsgIndex = this.messages.length;

  this.messages.push({
    role: 'typing',
    text: 'Thinking...',
    name: this.aiName
  });

  this.scrollToBottom();

  this.gemniAiService.sendMessage(userQuestion).subscribe({
    next: (res: any) => {

      // remove typing
      this.messages.splice(typingMsgIndex, 1);

      // AI RESPONSE
      this.messages.push({
        role: 'ai',
        text: res?.message || 'No reply from AI',
        name: this.aiName
      });

      this.scrollToBottom();
      this.cdr.detectChanges();
    },

    error: (err) => {

      this.messages.splice(typingMsgIndex, 1);

      this.messages.push({
        role: 'ai',
        text: err?.error?.message || 'AI Error',
        name: this.aiName
      });

      this.scrollToBottom();
      this.cdr.detectChanges();
    }
  });
}


}
