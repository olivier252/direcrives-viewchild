import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AfterViewInitDirective } from './after-view-init/after-view-init.directive';
import { ViewChildDirective } from './view-child/view-child.directive';

import { AfterViewInitComponent } from './after-view-init/after-view-init.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { RendererComponent } from './renderer/renderer.component';
import { TutoViewchildComponent } from './tuto-viewchild/tuto-viewchild.component';
import { ChildComponent } from './child/child.component';
import { ParagrapheDirective } from './view-child/paragraphe.directive';



@NgModule({
  declarations: [
    AppComponent,
    ViewChildComponent,
    AfterViewInitDirective,
    ViewChildDirective,
    AfterViewInitComponent,
    HomeComponent,
    RendererComponent,
    TutoViewchildComponent,
    ChildComponent,
    ParagrapheDirective,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
