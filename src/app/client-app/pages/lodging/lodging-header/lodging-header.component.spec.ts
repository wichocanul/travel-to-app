import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingHeaderComponent } from './lodging-header.component';

describe('LodgingHeaderComponent', () => {
  let component: LodgingHeaderComponent;
  let fixture: ComponentFixture<LodgingHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LodgingHeaderComponent]
    });
    fixture = TestBed.createComponent(LodgingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
