import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { IdeLineNumberComponent } from './components/shared/ide-line-number/ide-line-number.component';
import { EntryComponent } from './components/shared/entry/entry.component';
import { IncludeHeaderComponent } from './components/shared/include-header/include-header.component';
import { LineJumpComponent } from './components/shared/line-jump/line-jump.component';
import { HomeComponent } from '~/app/components/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { IdeConstructorComponent } from './components/shared/ide-constructor/ide-constructor.component';
import { EntryLinkComponent } from '~/app/components/shared/entry/components/entryLink.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IdeLineNumberComponent,
    EntryComponent,
    EntryLinkComponent,
    IncludeHeaderComponent,
    LineJumpComponent,
    HomeComponent,
    ArticleComponent,
    IdeConstructorComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
