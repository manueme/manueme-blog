import { Component, Input, OnInit } from '@angular/core';
import { Entry, entryIsArticle, IArticleEntry } from '~/app/services/entry/entry';

@Component({
  selector: 'app-entry-link',
  templateUrl: './entryLink.component.html',
  styleUrls: ['./entryLink.component.scss']
})
export class EntryLinkComponent implements OnInit {
  @Input() entry: Entry | undefined;
  @Input() commentStyle: boolean;
  public entryLink: string | undefined;

  entryIsArticle(arg: Entry): arg is IArticleEntry {
    return entryIsArticle(arg);
  }

  constructor() {
  }

  ngOnInit() {
    this.entryLink = entryIsArticle(this.entry) ? `/article/${this.entry.article}` : this.entry.linkURL;
  }
}
