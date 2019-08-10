import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-ide',
  templateUrl: './blog-ide.component.html',
  styleUrls: ['./blog-ide.component.scss']
})
export class BlogIdeComponent implements OnInit {
  numbers: number[] = [1, 2, 3, 27, 28, 32];

  constructor() {
  }

  ngOnInit() {
  }

}
