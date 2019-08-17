import { Component, Input, OnInit } from '@angular/core';
import { IEntry } from '~/app/services/entry/entry';
import { EntryService } from '~/app/services/entry/entry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {
  errorMessage: string;
  isOpen = false;
  @Input() spaceName: string;
  @Input() memberName: string;
  @Input() startLine: number;
  @Input() lineCount: number;
  bodyLineNumbers: number[] = [];
  entries: IEntry[] = [];

  constructor(private entryService: EntryService) {}

  ngOnInit() {
    for (let i = this.startLine + 1; i < this.startLine + this.lineCount; i++) {
      this.bodyLineNumbers.push(i);
    }

    this.entryService.getEntries().subscribe({
      next: entries => {
        this.entries = entries;
      },
      error: err => this.errorMessage = err
    });
  }
}
