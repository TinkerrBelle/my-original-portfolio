import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstProjectComponent } from './first-project.component';

describe('FirstProjectComponent', () => {
  let component: FirstProjectComponent;
  let fixture: ComponentFixture<FirstProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstProjectComponent]
    });
    fixture = TestBed.createComponent(FirstProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
