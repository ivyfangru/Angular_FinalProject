import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-two-button',
  templateUrl: './two-button.component.html',
  styleUrls: ['./two-button.component.css']
})
export class TwoButtonComponent implements OnInit {
  @Input() button1Text: string;
  @Input() button2Text: string;

  constructor() { }

  ngOnInit() {
  }

}
