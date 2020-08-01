import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrioComponent } from './frio.component';

describe('FrioComponent', () => {
  let component: FrioComponent;
  let fixture: ComponentFixture<FrioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
