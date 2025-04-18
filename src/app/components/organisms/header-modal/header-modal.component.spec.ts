import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderModalComponent } from './header-modal.component';

describe('HeaderModalComponent', () => {
  let component: HeaderModalComponent;
  let fixture: ComponentFixture<HeaderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
