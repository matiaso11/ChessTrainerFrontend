import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicesListComponent } from './pices-list.component';

describe('PicesListComponent', () => {
  let component: PicesListComponent;
  let fixture: ComponentFixture<PicesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
