import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfildeusuarioComponent } from './perfildeusuario.component';

describe('PerfildeusuarioComponent', () => {
  let component: PerfildeusuarioComponent;
  let fixture: ComponentFixture<PerfildeusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfildeusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfildeusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
