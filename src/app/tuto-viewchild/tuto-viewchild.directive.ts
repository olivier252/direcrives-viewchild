import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTutoViewchild]'
})
export class TutoViewchildDirective {
  salut = 'Comment ça va ?';

  constructor(elementRef: ElementRef, render: Renderer2) {
    let greet = render.createText('hello');
    render.appendChild(elementRef.nativeElement, greet)
   }
}
