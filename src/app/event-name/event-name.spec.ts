import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventName } from './event-name';

describe('EventName', () => {
  let component: EventName;
  let fixture: ComponentFixture<EventName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
