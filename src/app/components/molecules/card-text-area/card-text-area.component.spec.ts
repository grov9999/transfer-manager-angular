import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTextAreaComponent } from './card-text-area.component';

describe('CardTextAreaComponent', () => {
  let component: CardTextAreaComponent;
  let fixture: ComponentFixture<CardTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTextAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
