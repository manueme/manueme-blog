import { Component, Input, OnInit } from '@angular/core';

export interface IBlogEntry {
  imgSrc: string;
  imgAlt: string;
  title: string;
  brief: string;
}

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss']
})
export class BlogEntryComponent implements OnInit {
  @Input() entry: IBlogEntry;

  constructor() { }

  ngOnInit() {
  }

}
