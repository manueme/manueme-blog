import { Component, OnInit } from '@angular/core';
import { IArticle } from '~/app/services/entry/entry';
import { EntryService } from '~/app/services/entry/entry.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  errorMessage: string;
  article: IArticle | undefined;

  constructor(private entryService: EntryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.entryService.getArticle(this.route.snapshot.paramMap.get('id')).subscribe({
      next: a => {
        this.article = a;
      },
      error: err => (this.errorMessage = err)
    });
  }
}
