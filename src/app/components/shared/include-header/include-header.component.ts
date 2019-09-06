import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-include-header',
  templateUrl: './include-header.component.html',
  styleUrls: ['./include-header.component.scss']
})
export class IncludeHeaderComponent implements OnInit {
  @Input() includedFile: string;

  constructor() { }

  ngOnInit() {
  }

}
