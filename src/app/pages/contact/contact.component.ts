import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  onGitHubButtonClick() {
    window.open('https://github.com/Caleb-Hurshman');
  }

  onLinkedInButtonClick() {
    window.open('https://www.linkedin.com/in/caleb-hurshman-6446b51b8/');
  }
}
