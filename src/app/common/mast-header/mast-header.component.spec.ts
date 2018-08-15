import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastHeaderComponent } from './mast-header.component';

describe('MastHeaderComponent', () => {
  let component: MastHeaderComponent;
  let fixture: ComponentFixture<MastHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
