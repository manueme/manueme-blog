import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { IdeComponent } from '../components/ide/ide.component';
import { EntryListComponent } from '../components/entry-list/entry-list.component';
import { IdeLineNumberComponent } from '../components/ide-line-number/ide-line-number.component';
import { EntryComponent } from '../components/entry-list/entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IdeComponent,
    EntryListComponent,
    IdeLineNumberComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
