import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutsComponent } from './donuts.component';

describe('DonutsComponent', () => {
  let component: DonutsComponent;
  let fixture: ComponentFixture<DonutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
