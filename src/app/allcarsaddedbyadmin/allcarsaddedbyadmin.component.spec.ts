import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcarsaddedbyadminComponent } from './allcarsaddedbyadmin.component';

describe('AllcarsaddedbyadminComponent', () => {
  let component: AllcarsaddedbyadminComponent;
  let fixture: ComponentFixture<AllcarsaddedbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcarsaddedbyadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcarsaddedbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
