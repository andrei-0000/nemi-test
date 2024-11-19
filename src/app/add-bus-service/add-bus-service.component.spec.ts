import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusServiceComponent } from './add-bus-service.component';

describe('AddBusServiceComponent', () => {
  let component: AddBusServiceComponent;
  let fixture: ComponentFixture<AddBusServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBusServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBusServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
