import { Component, OnInit } from '@angular/core';
import { IEntry } from '~/app/services/entry/entry';
import { EntryService } from '~/app/services/entry/entry.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  errorMessage: string;
  entries: IEntry[] | undefined;

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.entryService.getEntries().subscribe({
      next: entries => {
        this.entries = entries;
      },
      error: err => (this.errorMessage = err)
    });
  }
}
