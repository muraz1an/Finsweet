import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsSmallComponent } from './posts-small.component';

describe('PostsSmallComponent', () => {
  let component: PostsSmallComponent;
  let fixture: ComponentFixture<PostsSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
