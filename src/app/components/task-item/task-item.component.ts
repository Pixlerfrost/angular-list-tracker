import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {Task} from '../../Task'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  constructor() { }
  faTimes = faTimes
  
  @Input() task: any;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  ngOnInit(): void {
  }
  onDelete(task: any)  {
    this.onDeleteTask.emit(task)
  }
}
