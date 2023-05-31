import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion20Component } from './seccion20.component';

describe('Seccion20Component', () => {
  let component: Seccion20Component;
  let fixture: ComponentFixture<Seccion20Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seccion20Component]
    });
    fixture = TestBed.createComponent(Seccion20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
