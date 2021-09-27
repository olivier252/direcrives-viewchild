import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterViewInitComponent } from './after-view-init/after-view-init.component';
import { HomeComponent } from './home/home.component';
import { RendererComponent } from './renderer/renderer.component';
import { TutoViewchildComponent } from './tuto-viewchild/tuto-viewchild.component';

import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'vc', component: ViewChildComponent},
  {path: 'afterviewinit', component: AfterViewInitComponent},
  {path: 'render', component: RendererComponent},
  {path: 'tuto', component: TutoViewchildComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
