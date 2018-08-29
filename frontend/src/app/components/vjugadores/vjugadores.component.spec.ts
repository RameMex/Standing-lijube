import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VjugadoresComponent } from './vjugadores.component';

describe('VjugadoresComponent', () => {
  let component: VjugadoresComponent;
  let fixture: ComponentFixture<VjugadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VjugadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VjugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
