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
  @Output() myOutputValue = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.myOutputValue.emit({name: 'Yunki', age: 61});
  }


}
