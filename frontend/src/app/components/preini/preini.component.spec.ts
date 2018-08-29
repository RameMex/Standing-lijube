import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreiniComponent } from './preini.component';

describe('PreiniComponent', () => {
  let component: PreiniComponent;
  let fixture: ComponentFixture<PreiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
