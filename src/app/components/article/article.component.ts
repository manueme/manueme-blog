import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { EntryService } from '~/app/services/entry/entry.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticleComponent implements OnInit {
  errorMessage: string;
  article: string | undefined;

  constructor(private entryService: EntryService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.entryService.getArticle(this.route.snapshot.paramMap.get('id')).subscribe({
      next: a => {
        this.article = a;
      },
      error: err => (this.errorMessage = err)
    });
  }
}
