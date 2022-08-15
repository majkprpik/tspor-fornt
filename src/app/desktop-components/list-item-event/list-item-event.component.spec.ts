import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemEventComponent } from './list-item-event.component';

describe('ListItemEventComponent', () => {
  let component: ListItemEventComponent;
  let fixture: ComponentFixture<ListItemEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
