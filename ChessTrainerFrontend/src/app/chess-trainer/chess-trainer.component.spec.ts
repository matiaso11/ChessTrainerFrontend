import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessTrainerComponent } from './chess-trainer.component';

describe('ChessTrainerComponent', () => {
  let component: ChessTrainerComponent;
  let fixture: ComponentFixture<ChessTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
