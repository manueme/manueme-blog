import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-entry-container',
  templateUrl: './blog-entry-container.component.html',
  styleUrls: ['./blog-entry-container.component.scss']
})
export class BlogEntryContainerComponent implements OnInit {
  isOpen = false;
  @Input() spaceName: string;
  @Input() memberName: string;
  @Input() startLine: number;
  @Input() lineCount: number;
  bodyLineNumbers: number[] = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = this.startLine + 1; i < (this.startLine + this.lineCount); i++) {
      this.bodyLineNumbers.push(i);
    }
  }

}
