import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookacarComponent } from './bookacar.component';

describe('BookacarComponent', () => {
  let component: BookacarComponent;
  let fixture: ComponentFixture<BookacarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookacarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
