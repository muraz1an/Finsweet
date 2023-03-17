import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAdmComponent } from './categories-adm.component';

describe('CategoriesAdmComponent', () => {
  let component: CategoriesAdmComponent;
  let fixture: ComponentFixture<CategoriesAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
