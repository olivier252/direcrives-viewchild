import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appViewChild]'
})
export class ViewChildDirective implements AfterViewInit {

  constructor(private divElementRef: ElementRef<HTMLDivElement>) { }

  // Appliqué à tous les éléments qui contiennent cette directive
  ngAfterViewInit(): void {
    this.divElementRef.nativeElement.style.color = "blue";
  }
}
