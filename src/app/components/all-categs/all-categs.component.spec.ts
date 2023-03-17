import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCategsComponent } from './all-categs.component';

describe('AllCategsComponent', () => {
  let component: AllCategsComponent;
  let fixture: ComponentFixture<AllCategsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCategsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCategsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
