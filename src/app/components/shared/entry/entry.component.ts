import { Component, Input, OnInit } from '@angular/core';
import { IEntry } from '~/app/services/entry/entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() entry: IEntry | undefined;
  private entryDate: Date | undefined;

  constructor() {}

  ngOnInit() {
    if (this.entry) {
      const dateParts = this.entry.date.split('/');
      this.entryDate = new Date(parseInt(dateParts[0], 10),
        parseInt(dateParts[1], 10) - 1,
        parseInt(dateParts[2], 10));
    }
  }
}
