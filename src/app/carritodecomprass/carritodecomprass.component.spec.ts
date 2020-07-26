import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritodecomprassComponent } from './carritodecomprass.component';

describe('CarritodecomprassComponent', () => {
  let component: CarritodecomprassComponent;
  let fixture: ComponentFixture<CarritodecomprassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritodecomprassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritodecomprassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
