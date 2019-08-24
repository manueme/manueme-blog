import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ide-line-number',
  templateUrl: './ide-line-number.component.html',
  styleUrls: ['./ide-line-number.component.scss']
})
export class IdeLineNumberComponent implements OnInit {
  @Input() lineNumber: number;

  constructor() {}

  ngOnInit() {}
}
