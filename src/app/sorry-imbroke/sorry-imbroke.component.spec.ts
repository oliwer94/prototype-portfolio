import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorryImbrokeComponent } from './sorry-imbroke.component';

describe('SorryImbrokeComponent', () => {
  let component: SorryImbrokeComponent;
  let fixture: ComponentFixture<SorryImbrokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorryImbrokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorryImbrokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
