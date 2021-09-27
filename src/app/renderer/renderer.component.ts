import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent {

  @ViewChildren('accordeon') accordeons: QueryList<ElementRef<HTMLElement>>;
  selected: string;

  constructor(
    private _renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    console.log('all accordeons', this.accordeons)

    
  }

  toggle(i) {
    // close all open items using renderer
    this.accordeons.forEach((acc) => {
      this._renderer.addClass(acc.nativeElement, 'hidden');
    })
    // get current target
    const currentTarget = i.target;
    // using html content to save select open accordeon 
    // and stop script if click on same item 
    if (currentTarget.innerHTML === this.selected) {
      this.selected = null;
      return;
    };
    this.selected = currentTarget.innerHTML;
    // get next html element using renderer
    const currentAccordeon = this._renderer.nextSibling(currentTarget);
    // remove class using renderer
    this._renderer.removeClass(currentAccordeon, 'hidden');
  }
}
