import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label:string='';
  @Input() isStyle:boolean=false;
  @Output() onClick:EventEmitter<any>=new EventEmitter<any>;
  constructor() { }

  ngOnInit(): void {
  }
  clickEvent(event:any){
    this.onClick.emit(event);
  }

}
