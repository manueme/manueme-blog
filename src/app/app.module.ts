import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogIdeComponent } from './blog-ide/blog-ide.component';
import { BlogEntryContainerComponent } from './blog-ide/blog-entry-container/blog-entry-container.component';
import { IdeLineNumberComponent } from './blog-ide/ide-line-number/ide-line-number.component';
import { BlogEntryComponent } from './blog-ide/blog-entry-container/blog-entry/blog-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogIdeComponent,
    BlogEntryContainerComponent,
    IdeLineNumberComponent,
    BlogEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
