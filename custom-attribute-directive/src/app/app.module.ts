import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetBackgroundDirective } from './CustomDirectives/setBackground.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { HoverDirective } from './CustomDirectives/hover.directive';
import { BetterHighlightDirective } from './CustomDirectives/betterhighlight.directive';
import { ClassDirective } from './CustomDirectives/class.directive';
import { StyleDirective } from './CustomDirectives/style.directive';
import { IfDirective } from './CustomDirectives/if.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    BetterHighlightDirective,
    ClassDirective,
    StyleDirective,
    IfDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
