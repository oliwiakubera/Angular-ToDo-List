import { Component } from '@angular/core';
import {Task} from './task';
import {fakeAsync} from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskName='Sugerowane zadanie codzienne';
  taskDate='';
  editMode = false;

 config: {[key: string]:string} | null=null;
 tasks: Task[] = [
   {
     name: 'Siłownia',
     deadline: '2022-07-02',
     done: false,
   },
   {
     name: 'Obiad',
     deadline: '2022-07-01',
     done: true,
   },
   {
     name: 'Sprzątanie',
     deadline: '2022-07-03',
     done: false,
   },

 ];

 constructor() {
   setTimeout(()=>{
     this.config={
       title: 'Lista zadań',
       footer: '© Lista zadań zbudowana w Angularze',
       date: new Date().toDateString()
     };
   },500)
   this.sortTask();
 }

 clearTasks(){
   this.tasks = [];
 }

  createTask(){
   const task:Task = {
     name: this.taskName,
     deadline: this.taskDate,
     done: false,
   };
   this.tasks.push(task);
   this.taskName='';
   this.taskDate='';
   this.sortTask();
  }

  switchEditMode(){
   this.editMode = !this.editMode;
  }

  markTaskAsDone(task:Task){
   task.done = true;
   this.sortTask();
  }
  deleteTask(task:Task){
   this.tasks = this.tasks.filter(e => e !== task);
   this.sortTask();
  }

  private sortTask(){
   this.tasks = this.tasks.sort((a: Task, b: Task) =>
    a.done === b.done ? 0 : a.done ? 1 : -1
   );
  }
}
