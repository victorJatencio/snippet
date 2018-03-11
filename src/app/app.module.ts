import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { SnippetElementComponent } from './snippet-element/snippet-element.component';

@NgModule({
  declarations: [
    AppComponent,
    SnippetElementComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    ClipboardModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
