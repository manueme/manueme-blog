import { Component, Input, OnInit } from '@angular/core';
import { Entry, EntryIsArticle, IArticleEntry } from '~/app/services/entry/entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() entry: Entry | undefined;
  public entryDate: Date | undefined;

  constructor() {}

  ngOnInit() {
    if (this.entry) {
      const dateParts = this.entry.date.split('/');
      this.entryDate = new Date(parseInt(dateParts[0], 10),
        parseInt(dateParts[1], 10) - 1,
        parseInt(dateParts[2], 10));
    }
  }

  EntryIsArticle(arg: Entry): arg is IArticleEntry {
    return EntryIsArticle(arg);
  }
}
