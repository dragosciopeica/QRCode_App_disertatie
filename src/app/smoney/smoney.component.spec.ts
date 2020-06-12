import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoneyComponent } from './smoney.component';

describe('SmoneyComponent', () => {
  let component: SmoneyComponent;
  let fixture: ComponentFixture<SmoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
