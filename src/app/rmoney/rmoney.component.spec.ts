import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmoneyComponent } from './rmoney.component';

describe('RmoneyComponent', () => {
  let component: RmoneyComponent;
  let fixture: ComponentFixture<RmoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
