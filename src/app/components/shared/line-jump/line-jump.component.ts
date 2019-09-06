import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-jump',
  templateUrl: './line-jump.component.html',
  styleUrls: ['./line-jump.component.scss']
})
export class LineJumpComponent implements OnInit {
  @Input() lineNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
