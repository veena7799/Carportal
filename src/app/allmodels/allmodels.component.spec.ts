import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmodelsComponent } from './allmodels.component';

describe('AllmodelsComponent', () => {
  let component: AllmodelsComponent;
  let fixture: ComponentFixture<AllmodelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmodelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmodelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
