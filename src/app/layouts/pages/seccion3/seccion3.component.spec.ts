import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion3Component } from './seccion3.component';

describe('Seccion3Component', () => {
  let component: Seccion3Component;
  let fixture: ComponentFixture<Seccion3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seccion3Component]
    });
    fixture = TestBed.createComponent(Seccion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
