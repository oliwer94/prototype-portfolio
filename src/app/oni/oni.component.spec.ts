import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OniComponent } from './oni.component';

describe('OniComponent', () => {
  let component: OniComponent;
  let fixture: ComponentFixture<OniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
