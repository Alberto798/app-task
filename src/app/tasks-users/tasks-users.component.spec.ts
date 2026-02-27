import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksUsersComponent } from './tasks-users.component';

describe('TasksUsersComponent', () => {
  let component: TasksUsersComponent;
  let fixture: ComponentFixture<TasksUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
