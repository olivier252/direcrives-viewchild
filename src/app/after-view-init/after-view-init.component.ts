import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { AfterViewInitDirective } from './after-view-init.directive';

@Component({
  selector: 'app-after-view-init',
  templateUrl: './after-view-init.component.html',
  styleUrls: ['./after-view-init.component.css']
})
export class AfterViewInitComponent implements AfterViewInit {

  // l'attribut 'msgTempRef' référence l'élément qui contient la variable de référence
@ViewChild('messageTemplate') private msgTempRef:TemplateRef<any>;

  // messageDirective = la liste des éléments ou des directives du DOM
  @ViewChildren(AfterViewInitDirective) private messDirective: QueryList<AfterViewInitDirective>;
// pr chaq element de la queryList qui contient tous les elements ciblés avec la directive on applique le template
  constructor() { }

  ngAfterViewInit() {
   console.log(this.messDirective);
   console.log(this.messDirective.length);

   this.messDirective.forEach(ms => ms.viewContainerRef.createEmbeddedView(this.msgTempRef));
  }
}

/*
- quand angular analyse le template, il analyse les vues enfant référencées par le sélecteur passé en paramètre du décorateur de ViewChildren() côté ts. Le sélecteur correspond à la variable locale passée à la vue enfant côté template.
A ce moment, une liste des requêtes de vue est définie et afterViewInit() se déclenche, ce qui a pour effet de récupérer la liste des directives dans
l'attribut messDirective.
On dit ensuite que pour chaque élément de cette liste, on associe l'élément msgTempRef dans le container défini dans la direcitve AfterViewInitDirective. Dès lors qu'un élémnent
 incluera la directive côté template, il restitura l'élément référencé par l'attribut msgTempRef (ng-template)
*/
