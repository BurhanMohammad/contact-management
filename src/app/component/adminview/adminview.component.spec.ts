import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewComponent } from './adminview.component';

describe('AdminviewComponent', () => {
  let component: AdminviewComponent;
  let fixture: ComponentFixture<AdminviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
