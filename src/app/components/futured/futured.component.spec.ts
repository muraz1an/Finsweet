import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturedComponent } from './futured.component';

describe('FuturedComponent', () => {
  let component: FuturedComponent;
  let fixture: ComponentFixture<FuturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
