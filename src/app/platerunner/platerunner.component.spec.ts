import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaterunnerComponent } from './platerunner.component';

describe('QuadballComponent', () => {
  let component: PlaterunnerComponent;
  let fixture: ComponentFixture<PlaterunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaterunnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaterunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
