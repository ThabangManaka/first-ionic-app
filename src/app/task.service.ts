import { Injectable } from '@angular/core';
import {Task} from './task';
@Injectable({
    providedIn: 'root'
})
export class TaskService {
    _taskList: Array<Task> = [{Id:1,content:"Build Mobile App", status:"High",priority:""},
    {Id:2,content:"Try this tutorial", status:"High",priority:""},
    {Id:3,content:"Subscribe to angular news letters", status:"Normal",priority:""},
    {Id:4,content:"check ionic resource", status:"High",priority:""}
    ]
  constructor() { }

  getAllTask() {
    return this._taskList;
  }

updateTask(task: Task){
  console.log(task.Id);
  
     const index = this._taskList.findIndex(c => c.Id === task.Id);
    // console.log(index);
     this._taskList[index] = task;

  }
deleteEmployee(id: number) {
     const emp = this._taskList.findIndex(c => c.Id == id);
     if (emp >-1) {
    this._taskList.splice(emp,1);

   }
 }
 addTask(task) {

   this._taskList.push(task);

 }
}