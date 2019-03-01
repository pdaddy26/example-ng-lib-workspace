import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycommonlibComponent } from './mycommonlib.component';

describe('MycommonlibComponent', () => {
  let component: MycommonlibComponent;
  let fixture: ComponentFixture<MycommonlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycommonlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycommonlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
