import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiezometricComponent } from './piezometric.component';

describe('PiezometricComponent', () => {
  let component: PiezometricComponent;
  let fixture: ComponentFixture<PiezometricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiezometricComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PiezometricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
