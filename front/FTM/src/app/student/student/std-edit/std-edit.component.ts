import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-std-edit',
  templateUrl: './std-edit.component.html',
  styleUrls: ['./std-edit.component.scss']
})
export class StdEditComponent implements OnInit {
  @Input() comapnyData:any;
  @Output() closedModal:EventEmitter<boolean>=new EventEmitter<boolean>;
  updateCompanyData: FormGroup;
  labelBtn:string='تعديل';
  isUpdate:boolean=false;
  modalStatus:boolean=false;
  constructor() {
     this.initializationFG();
   }

   initializationFG(): void {
    this.updateCompanyData = new FormGroup({
      name: new FormControl('', [Validators.required,]),  
      address: new FormControl('', [Validators.required]),
      field: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      numDaysTraining: new FormControl('', [Validators.required]),
      startTraining: new FormControl('', [Validators.required]),
      endTraining: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.updateCompanyData.setValue(this.comapnyData);
  }
  closeModal():void{
    this.closedModal.emit(this.modalStatus);
  }
  update(){
    this.isUpdate=true;
      setTimeout(() => {
        this.isUpdate = false;
        this.closeModal();
      }, 2000);
  }
}
