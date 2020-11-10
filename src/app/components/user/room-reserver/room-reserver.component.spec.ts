import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomReserverComponent } from './room-reserver.component';

describe('RoomReserverComponent', () => {
  let component: RoomReserverComponent;
  let fixture: ComponentFixture<RoomReserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomReserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomReserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
