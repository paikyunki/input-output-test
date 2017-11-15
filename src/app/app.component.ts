import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  messageToChild = '';
  another: string = 'Another!';
  messageFromChild: string = '';
  messageBuffer: string = 'X';

  letters = [
    {message: 'Good morning', amount: 10.50 },
    {message: 'How are you?', amount: 5.45},
    {message: 'Hello world!', amount: 100.00 }
  ];

  awesomeMethod(msg: string) {
    console.log(typeof (msg));
    this.messageFromChild = msg;
  }

  onClick() {
    this.messageToChild = this.messageBuffer;
  }

}
