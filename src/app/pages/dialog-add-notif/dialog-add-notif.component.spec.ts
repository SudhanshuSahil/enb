import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddNotifComponent } from './dialog-add-notif.component';

describe('DialogAddNotifComponent', () => {
  let component: DialogAddNotifComponent;
  let fixture: ComponentFixture<DialogAddNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
