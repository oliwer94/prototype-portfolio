import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PandaProtectComponent } from './panda-protect.component';

describe('PandaProtectComponent', () => {
  let component: PandaProtectComponent;
  let fixture: ComponentFixture<PandaProtectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PandaProtectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PandaProtectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
