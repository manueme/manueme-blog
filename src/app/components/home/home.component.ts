import { Component, OnInit } from '@angular/core';
import { Entry } from '~/app/services/entry/entry';
import { EntryService } from '~/app/services/entry/entry.service';
import { Meta, Title } from '@angular/platform-browser';
import { blogTitle } from '~/app/components/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  errorMessage: string;
  entries: Entry[] | undefined;

  constructor(private entryService: EntryService, private meta: Meta, private titleService: Title) {
    titleService.setTitle(blogTitle);
    meta.updateTag({ name: 'description', content: 'Software development blog' }, `name='description'`);
    meta.updateTag({ name: 'author', content: 'Manuel Machado' }, `name='author'`);
    meta.updateTag(
      {
        name: 'keywords',
        content:
          'Full-Stack, c++, wxWidgets, typescript, web development, OpenGL, Angular, React, Node.js, JavaScript, .Net Core'
      },
      `name='keywords'`
    );
    meta.updateTag({ property: 'og:title', content: blogTitle }, `property='og:title'`);
  }

  ngOnInit() {
    this.entryService.getEntries().subscribe({
      next: entries => {
        this.entries = entries;
      },
      error: err => (this.errorMessage = err)
    });
  }
}
