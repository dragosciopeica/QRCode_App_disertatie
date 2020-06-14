import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayDoneComponent } from './pay-done.component';

describe('PayDoneComponent', () => {
  let component: PayDoneComponent;
  let fixture: ComponentFixture<PayDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
