import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadballComponent } from './quadball.component';

describe('QuadballComponent', () => {
  let component: QuadballComponent;
  let fixture: ComponentFixture<QuadballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
