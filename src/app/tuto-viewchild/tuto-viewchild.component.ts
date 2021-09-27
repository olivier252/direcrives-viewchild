import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-tuto-viewchild',
  templateUrl: './tuto-viewchild.component.html',
  styleUrls: ['./tuto-viewchild.component.css']
})
export class TutoViewchildComponent implements AfterViewInit {
  greetMe: string;

  @ViewChild('accessId') accessId: ElementRef<HTMLInputElement>;
  @ViewChild(ChildComponent) childComponent: ChildComponent;

  ngAfterViewInit() {
    //this.accessId.nativeElement.value = 'Oliv';
    this.childComponent.EverybodySayGoodbye();
  }

 
}
