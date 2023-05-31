import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion14Component } from './seccion14.component';

describe('Seccion14Component', () => {
  let component: Seccion14Component;
  let fixture: ComponentFixture<Seccion14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seccion14Component]
    });
    fixture = TestBed.createComponent(Seccion14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
