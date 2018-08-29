import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreinfComponent } from './preinf.component';

describe('PreinfComponent', () => {
  let component: PreinfComponent;
  let fixture: ComponentFixture<PreinfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreinfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
