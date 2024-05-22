import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from "@angular/material/dialog";
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Task } from '../../storage/task.type';
import { TaskService } from '../../task.service';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {
  task: Task | undefined;

  isFirstTask = true;
  isLastTask = false;

  constructor(
    readonly router: Router,
    readonly taskService: TaskService,
    public dialog: MatDialog
  ) {
    this.task = taskService.getFirstTask();
  }

  getNextTask(): void {
    if(this.isLastTask) {
      this.resetGame();
    }

    this.task = this.taskService.getNextTask();
    this.isFirstTask = this.taskService.isFirstTask();
    this.isLastTask = this.taskService.isLastTask();
  }

  getPreviousTask(): void {
    this.isFirstTask = this.taskService.isFirstTask();
    this.task = this.taskService.getPreviousTask();
  }

  resetGame(): void {
    this.router.navigateByUrl('');
  }

  openDialog(): void {
    this.dialog.open(TaskDialogComponent, {
      height: '95px',
    });
  }
}