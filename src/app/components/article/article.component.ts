import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EntryService } from '~/app/services/entry/entry.service';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { blogTitle } from '~/app/components/app.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {
  errorMessage: string;
  article: string | undefined;

  constructor(
    private entryService: EntryService,
    private route: ActivatedRoute,
    private meta: Meta,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.entryService.getArticle(this.route.snapshot.paramMap.get('id')).subscribe({
      next: a => {
        this.article = a.html;
        this.titleService.setTitle(`${blogTitle} - ${a.title}`);
        this.meta.updateTag({ name: 'description', content: a.description }, `name='description'`);
        this.meta.updateTag({ name: 'author', content: a.author }, `name='author'`);
        this.meta.updateTag({ name: 'date', content: a.date, scheme: 'YYYY/MM/DD' }, `name='date'`);
        this.meta.updateTag({ name: 'keywords', content: a.keywords }, `name='keywords'`);
        this.meta.updateTag({ property: 'og:title', content: a.title }, `property='og:title'`);
      },
      error: err => (this.errorMessage = err)
    });
  }
}
