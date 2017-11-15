import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() fromParent: string;
  @Input() amount: number;
  @Input() another: string;
  @Output() childEmitter = new EventEmitter<string>();
  messageToParent: string = '';

  constructor() { }

  ngOnInit() {

  }

  onClick() {
    this.childEmitter.emit(this.messageToParent);
  }

}
