import { Component, Input, OnInit } from '@angular/core';
import { IEntry } from '~/app/services/entry/entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() entry: IEntry | undefined;

  constructor() {}

  ngOnInit() {}
}
