import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavierpruebaComponent } from './javierprueba.component';

describe('JavierpruebaComponent', () => {
  let component: JavierpruebaComponent;
  let fixture: ComponentFixture<JavierpruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavierpruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavierpruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
