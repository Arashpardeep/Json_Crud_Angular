import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcoursesComponent } from './showcourses.component';

describe('ShowcoursesComponent', () => {
  let component: ShowcoursesComponent;
  let fixture: ComponentFixture<ShowcoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcoursesComponent]
    });
    fixture = TestBed.createComponent(ShowcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
