import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion11Component } from './seccion11.component';

describe('Seccion11Component', () => {
  let component: Seccion11Component;
  let fixture: ComponentFixture<Seccion11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seccion11Component]
    });
    fixture = TestBed.createComponent(Seccion11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
