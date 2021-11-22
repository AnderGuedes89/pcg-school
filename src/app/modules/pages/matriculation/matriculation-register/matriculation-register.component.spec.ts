import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculationRegisterComponent } from './matriculation-register.component';

describe('MatriculationRegisterComponent', () => {
  let component: MatriculationRegisterComponent;
  let fixture: ComponentFixture<MatriculationRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriculationRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculationRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
