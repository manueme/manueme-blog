import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-ide-constructor',
  templateUrl: './ide-constructor.component.html',
  styleUrls: ['./ide-constructor.component.scss']
})
export class IdeConstructorComponent implements OnInit, OnChanges {
  @Input() spaceName = 'Blog::';
  @Input() memberName = 'Blog';
  @Input() startLine = 3;

  isOpen = true;
  bodyLineNumbers: number[] = [];
  public lineCount = 1;
  private lineHeight = 55;
  private contentHeight = 0;

  @ViewChild('ideConstructorBody', { static: false }) elementView!: ElementRef;

  constructor() {}

  ngOnInit() {}

  public recalculateLineNumbers() {
    setTimeout(() => {
      if (this.elementView) {
        const element = this.elementView.nativeElement as HTMLDivElement;
        const currentHeight = element.clientHeight;
        if (currentHeight > this.contentHeight) {
          this.contentHeight = element.clientHeight;
          this.bodyLineNumbers = [];
          this.lineCount = Math.ceil(1 + this.contentHeight / this.lineHeight);
          for (let i = this.startLine + 1; i < this.startLine + this.lineCount; i++) {
            this.bodyLineNumbers.push(i);
          }
        }
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.recalculateLineNumbers();
  }
}
