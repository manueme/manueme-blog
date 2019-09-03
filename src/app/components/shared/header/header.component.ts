import { Component, OnInit, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewChecked {

  @ViewChild('authorLine', { static: false }) authorView !: ElementRef;
  @ViewChild('header', { static: false }) headerView !: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewChecked() {
    setTimeout(() => {
      const element = this.authorView.nativeElement as HTMLDivElement;
      const headerElement = this.headerView.nativeElement as HTMLDivElement;
      const currentOffset = headerElement.clientHeight - element.clientHeight - 2;
      if (window.pageYOffset > currentOffset) {
        element.classList.add("sticky");
      } else {
        element.classList.remove("sticky");
      }
    });
  }
}
