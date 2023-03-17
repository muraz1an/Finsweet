import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadNextComponent } from './read-next.component';

describe('ReadNextComponent', () => {
  let component: ReadNextComponent;
  let fixture: ComponentFixture<ReadNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadNextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
