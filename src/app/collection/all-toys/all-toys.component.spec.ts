import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllToysComponent } from './all-toys.component';

describe('AllToysComponent', () => {
  let component: AllToysComponent;
  let fixture: ComponentFixture<AllToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllToysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
