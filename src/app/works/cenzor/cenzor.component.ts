import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cenzor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent {
  badWords: string[] = [];
  newWord: string = '';
  textToCensor: string = '';

  add(): void {
    const add = document.querySelector('#btn-add') as HTMLButtonElement;
    const reset = document.querySelector('#btn-reset') as HTMLButtonElement;
    const cenzor = document.querySelector('#btn-cenzor') as HTMLButtonElement;
    add.style.outline = '4px solid #dc8828a8';
    reset.style.outline = 'none';
    cenzor.style.outline = 'none';
    if (this.newWord.trim() !== '') {
      this.badWords.push(this.newWord.trim());
      this.newWord = '';
      const wordInput = document.querySelector('#word') as HTMLInputElement;
      wordInput.style.border = '1px solid black';
      wordInput.placeholder = 'word here';
    } else {
      const wordInput = document.querySelector('#word') as HTMLInputElement;
      wordInput.placeholder = 'Please write a word';
      wordInput.style.border = '3px solid red';
    }
  }

  reset(): void {
    const reset = document.querySelector('#btn-reset') as HTMLButtonElement;
    const add = document.querySelector('#btn-add') as HTMLButtonElement;
    const textInput = document.querySelector('#text') as HTMLInputElement;
    const cenzor = document.querySelector('#btn-cenzor') as HTMLButtonElement;
    const wordInput = document.querySelector('#word') as HTMLInputElement;
    textInput.style.outline = '1px solid black';
    reset.style.outline = '4px solid #dc284cbf';
    cenzor.style.outline = 'none';
    add.style.outline = 'none';
    textInput.style.outline = '1px solid black';
    wordInput.style.border = '1px solid black';
    wordInput.placeholder = 'word here'
    this.badWords = [];
    this.newWord = '';
    this.textToCensor = '';
  }

  censor(): void {
    let text = this.textToCensor;
    const textInput = document.querySelector('#text') as HTMLInputElement;
    const cenzor = document.querySelector('#btn-cenzor') as HTMLButtonElement;
    const add = document.querySelector('#btn-add') as HTMLButtonElement;
    textInput.style.outline = '3px solid #19c76d';
    textInput.style.border = 'none';
    cenzor.style.outline = '4px solid #19c76d98';
    add.style.outline = 'none';
    this.badWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      text = text.replace(regex, '*'.repeat(word.length));
    });
    this.textToCensor = text;
  }
}