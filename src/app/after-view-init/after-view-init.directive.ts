import { Directive, ElementRef, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[aviDir]'
})
// La directive créé un message
export class AfterViewInitDirective {
  
  constructor(public viewContainerRef: ViewContainerRef,
    ) { }
}
