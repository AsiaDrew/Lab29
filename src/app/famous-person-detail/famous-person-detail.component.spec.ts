import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousPersonDetailComponent } from './famous-person-detail.component';

describe('FamousPersonDetailComponent', () => {
  let component: FamousPersonDetailComponent;
  let fixture: ComponentFixture<FamousPersonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamousPersonDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamousPersonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
