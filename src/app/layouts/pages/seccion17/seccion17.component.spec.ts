import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion17Component } from './seccion17.component';

describe('Seccion17Component', () => {
  let component: Seccion17Component;
  let fixture: ComponentFixture<Seccion17Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seccion17Component]
    });
    fixture = TestBed.createComponent(Seccion17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
