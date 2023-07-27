import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from '../../model-interface/homePage/company';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() id:any;
  @Input() companyArr:any;
  @Output() closedModal:EventEmitter<boolean>=new EventEmitter<boolean>;
  companyInfo:any;
  imageSrc=`${environment.apiImage}`;

  constructor() { }

  ngOnInit(): void {
    this.companyInfo = this.companyArr.find((i:any)=>i.id==this.id);
    
  }
  closeModal():void{
    this.closedModal.emit(false);
  }
}
