import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimospComponent } from './ultimosp.component';

describe('UltimospComponent', () => {
  let component: UltimospComponent;
  let fixture: ComponentFixture<UltimospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
