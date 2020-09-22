import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private _taskService: TaskService,
  public alertController: AlertController) { }

  ngOnInit() {
  }
  get AllTaskList() {
    return this._taskService.getAllTask();
  }

  async  addNewTask() {
    const alert = await this.alertController.create({
      header: 'Add New Task',
        inputs: [
          
        {
          name: 'content',
          type: 'text',
          placeholder: 'Content'
        },
    
        {
          name: 'status',
          type: 'text',
          placeholder: 'Status'
        },
            {
          name: 'priority',
          type: 'text',
          placeholder: 'Priority'
        },
        ],
      buttons: [
        { text: "Submit", handler: (res) =>{
          this._taskService.addTask(res);

        }}
      
      ],
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  onDelete(id: any) {
    this._taskService.deleteEmployee(id);

  }
 async onUpdate (Id: any) {
    const task= this._taskService.getAllTask().find(c => c.Id === Id);
    
      const alert = await this.alertController.create({
      header: 'Update Task',
        inputs: [
      
        {
          name: 'content',
          type: 'text',
          value: task.content,
          placeholder: 'Content'
        },
    
        {
          name: 'status',
          type: 'text',
          value: task.status,
          placeholder: 'Status'
        },
            {
          name: 'priority',
          type: 'text',
          value: task.priority,
          placeholder: 'Priority'
        },
        ],
      buttons: [
        { text: "Save", handler: (res) =>{
          task.content= res.content;
          task.status =res.status;
          task.priority =res.priority;
          console.log(task)
          this._taskService.updateTask(task);

        }}
      
      ],
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    //console.log(result);

  }

}