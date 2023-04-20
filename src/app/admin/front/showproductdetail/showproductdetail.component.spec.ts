import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowproductdetailComponent } from './showproductdetail.component';

describe('ShowproductdetailComponent', () => {
  let component: ShowproductdetailComponent;
  let fixture: ComponentFixture<ShowproductdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowproductdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowproductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
