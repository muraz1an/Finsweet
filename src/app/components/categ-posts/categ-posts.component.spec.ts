import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategPostsComponent } from './categ-posts.component';

describe('CategPostsComponent', () => {
  let component: CategPostsComponent;
  let fixture: ComponentFixture<CategPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
