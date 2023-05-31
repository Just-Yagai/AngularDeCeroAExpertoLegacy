import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion24Component } from './seccion24.component';

describe('Seccion24Component', () => {
  let component: Seccion24Component;
  let fixture: ComponentFixture<Seccion24Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seccion24Component]
    });
    fixture = TestBed.createComponent(Seccion24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
