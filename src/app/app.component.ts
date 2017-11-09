import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  messageToChild = '@input finally works!';

  letters = [
    {message: 'Good morning', amount: 10.50 },
    {message: 'How are you?', amount: 5.45},
    {message: 'Hello world!', amount: 100.00 }
  ];

}
