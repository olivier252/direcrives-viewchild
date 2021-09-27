import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoViewchildComponent } from './tuto-viewchild.component';

describe('TutoViewchildComponent', () => {
  let component: TutoViewchildComponent;
  let fixture: ComponentFixture<TutoViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoViewchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
