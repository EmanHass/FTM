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
  imageSrc=`${environment.apiImage}/images/`;
  // sliderImages = [
  //   {
  //     src: 'assets/logo/unitone.png',
  //     alt: 'Unit One',
  //     name: 'Unit One',
  //     id:1
  //   }, {
  //     src: 'assets/logo/Newsol.png',
  //     alt: 'New Solution',
  //     name: 'New Solution',
  //     id:2
  //   }, {
  //     src: 'assets/logo/Jawal.png',
  //     alt: 'Jawal',
  //     name: 'Jawal',
  //     id:3
  //   }, {
  //     src: 'assets/logo/NewLine.png',
  //     alt: 'New Line',
  //     name: 'New Line',
  //     id:4
  //   }, {
  //     src: 'assets/logo/toopoptech.png',
  //     alt: 'Too Pop Tech',
  //     name: 'Too Pop Tech',
  //     id:5
  //   }  
  // ]
  constructor() { }

  ngOnInit(): void {
    // this.companyArr.find((i:any)=>i.id==this.id);
    this.companyInfo = this.companyArr.find((i:any)=>i.id==this.id);
    
  }
  closeModal():void{
    this.closedModal.emit(false);
  }
}
