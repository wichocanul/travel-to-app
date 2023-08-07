import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismHeaderComponent } from './tourism-header.component';

describe('TourismHeaderComponent', () => {
  let component: TourismHeaderComponent;
  let fixture: ComponentFixture<TourismHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourismHeaderComponent]
    });
    fixture = TestBed.createComponent(TourismHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
