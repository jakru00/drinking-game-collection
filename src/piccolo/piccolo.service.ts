import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from './storage/dummy-tasks/dummy-tasks';
import { Task } from './storage/task.type';

const TASK_AMOUNT_PER_GAME = 10;

@Injectable({
  providedIn: 'root'
})
export class PiccoloService {
  dummyTasks: Task[] = [...DUMMY_TASKS];

  taskHistory: Task[] = [];

  index = 0;

  getFirstTask(): Task {
    this.moveNextTask();
console.log(DUMMY_TASKS)
    return this.taskHistory[this.index];
  }

  getNextTask(): Task | undefined {
    this.index = ++this.index;

    if(this.index > TASK_AMOUNT_PER_GAME - 1) {
      this.resetGame();
      return undefined;
    } 
    
    if(this.index >= this.taskHistory.length) {
      this.moveNextTask();
    }
    
    return this.taskHistory[this.index];
  }
  
  getPreviousTask(): Task | undefined {
    this.index = --this.index;
    
    return this.taskHistory.length > 0
    ? this.taskHistory[this.index]
    : undefined;
  }

  isFirstTask(): boolean {
    return this.index === 0;
  }

  isLastTask(): boolean {
    return this.index === TASK_AMOUNT_PER_GAME - 1;
  }
  
  resetGame() {
    this.dummyTasks = [...DUMMY_TASKS];
    this.taskHistory = [];
    this.index = 0;
  }

  private moveNextTask(): void {
    let nextTask = this.dummyTasks.pop();
    
    if(nextTask)
      this.taskHistory.push(nextTask);
  }
}
