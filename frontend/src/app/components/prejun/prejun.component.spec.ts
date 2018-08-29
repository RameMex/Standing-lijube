import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrejunComponent } from './prejun.component';

describe('PrejunComponent', () => {
  let component: PrejunComponent;
  let fixture: ComponentFixture<PrejunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrejunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrejunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
