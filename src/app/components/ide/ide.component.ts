import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.scss']
})
export class IdeComponent implements OnInit {
  numbers: number[] = [1, 2, 3, 27, 28, 32];

  constructor() {
  }

  ngOnInit() {
  }

}
