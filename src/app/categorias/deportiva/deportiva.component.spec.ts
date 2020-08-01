import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportivaComponent } from './deportiva.component';

describe('DeportivaComponent', () => {
  let component: DeportivaComponent;
  let fixture: ComponentFixture<DeportivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeportivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeportivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
