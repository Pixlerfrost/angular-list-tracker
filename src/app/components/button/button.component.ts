import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() btnclick = new EventEmitter()
  @Input() text: any;


  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnclick.emit()
  }

}
