import { Component, Input, OnInit } from '@angular/core';
import { IArticle, IEntry, IImage, IParagraph } from '~/app/services/entry/entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() entry: IEntry | IArticle;

  constructor() {}

  articleElementIsParagraph(element: IParagraph | IImage): element is IParagraph {
    return (element as IParagraph).p !== undefined;
  }

  articleElementIsImage(element: IParagraph | IImage): element is IImage {
    return (element as IImage).imgSrc !== undefined;
  }

  isArticle(entry: IEntry | IArticle): entry is IArticle {
    return (entry as IArticle).fullArticle !== undefined;
  }

  ngOnInit() {}
}
