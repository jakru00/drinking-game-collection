import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PiccoloService } from '../../piccolo.service';
import { Task } from '../../storage/task.type';
import { Router } from '@angular/router';

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
    readonly service: PiccoloService,
  ) {
    this.task = service.getFirstTask();
  }

  getNextTask(): void {
    if(this.isLastTask) {
      this.resetGame();
    }

    this.task = this.service.getNextTask();
    this.isFirstTask = this.service.isFirstTask();
    this.isLastTask = this.service.isLastTask();
  }

  getPreviousTask(): void {
    this.isFirstTask = this.service.isFirstTask();
    this.task = this.service.getPreviousTask();
  }

  resetGame(): void {
    this.router.navigateByUrl('');
  }
}
