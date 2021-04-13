import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindacarComponent } from './findacar.component';

describe('FindacarComponent', () => {
  let component: FindacarComponent;
  let fixture: ComponentFixture<FindacarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindacarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
