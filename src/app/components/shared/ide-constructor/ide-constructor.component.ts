import { AfterViewInit, Component, Directive, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ide-constructor',
  templateUrl: './ide-constructor.component.html',
  styleUrls: ['./ide-constructor.component.scss']
})
export class IdeConstructorComponent implements OnInit, AfterViewInit  {
  @Input() spaceName = 'Blog::';
  @Input() memberName = 'Blog';
  @Input() startLine = 3;

  isOpen = true;
  bodyLineNumbers: number[] = [];
  public lineCount = 1;
  private lineHeight = 55;

  @ViewChild('ideConstructorBody', { static: false }) elementView !: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      const contentHeight = this.elementView.nativeElement.clientHeight;
      this.lineCount = Math.ceil(contentHeight / this.lineHeight) + 1;
      for (let i = this.startLine + 1; i < this.startLine + this.lineCount; i++) {
        this.bodyLineNumbers.push(i);
      }
    });
  }
}
