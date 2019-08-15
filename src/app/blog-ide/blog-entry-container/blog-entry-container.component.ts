import { Component, Input, OnInit } from '@angular/core';
import { IBlogEntry } from '~/app/blog-ide/blog-entry-container/blog-entry/blog-entry.component';

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
  entries: IBlogEntry[] = [
    {
      title: 'Loren ipsum dolor sit amet',
      imgSrc: 'assets/img/blog-entry-image-example.jpg',
      brief:
        'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In egestas erat imperdiet sed euismod nisi porta lorem. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Arcu felis bibendum ut tristique et egestas quis ipsum. Mi quis hendrerit dolor magna eget est lorem ipsum dolor.',
      imgAlt: ''
    },
    {
      title: 'Loren ipsum dolor sit amet',
      imgSrc: 'assets/img/blog-entry-image-example.jpg',
      brief:
        'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In egestas erat imperdiet sed euismod nisi porta lorem. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Arcu felis bibendum ut tristique et egestas quis ipsum. Mi quis hendrerit dolor magna eget est lorem ipsum dolor.',
      imgAlt: ''
    }
  ];

  constructor() {}

  ngOnInit() {
    for (let i = this.startLine + 1; i < this.startLine + this.lineCount; i++) {
      this.bodyLineNumbers.push(i);
    }
  }
}
