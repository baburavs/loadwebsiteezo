import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingkartComponent } from './shoppingkart.component';

describe('ShoppingkartComponent', () => {
  let component: ShoppingkartComponent;
  let fixture: ComponentFixture<ShoppingkartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingkartComponent]
    });
    fixture = TestBed.createComponent(ShoppingkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
