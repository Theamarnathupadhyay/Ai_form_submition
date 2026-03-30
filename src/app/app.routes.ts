import { Routes } from '@angular/router';
import { GemniAi } from './gemni-ai/gemni-ai';

export const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'chat', component: GemniAi },
  { path: '**', redirectTo: 'chat' }
];
