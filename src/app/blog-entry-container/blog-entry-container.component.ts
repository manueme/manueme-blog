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

  constructor() {}

  ngOnInit() {
  }

}
