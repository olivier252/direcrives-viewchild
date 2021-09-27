import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { ViewChildDirective } from './view-child.directive';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements AfterViewInit {
  credentials = { login: ''};

  // loginInputRef est une variable globale de type input, on accède à un élementHTML avecangular grâce à élémentRef
  @ViewChild('loginInput') private loginInputRef: ElementRef<HTMLInputElement>
  @ViewChild('paragrapheElement') private paragrapherRef: ElementRef<HTMLParagraphElement>

  @ViewChild('appViewChild') private directivetest: QueryList<ViewChildDirective>
//private messDirective: QueryList<AfterViewInitDirective>;


  //Confère directive
  ngAfterViewInit() {
    this.loginInputRef.nativeElement.focus();
    let para = this.paragrapherRef.nativeElement;
    para.setAttribute('style', 'color: white; background: red');
  }
}
