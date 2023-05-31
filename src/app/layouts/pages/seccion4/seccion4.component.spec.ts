import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion4Component } from './seccion4.component';

describe('Seccion4Component', () => {
  let component: Seccion4Component;
  let fixture: ComponentFixture<Seccion4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seccion4Component]
    });
    fixture = TestBed.createComponent(Seccion4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
