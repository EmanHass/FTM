import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  btnLabel:string='إضافة أجندة تدريب';
  showModal:boolean=false;
  add:string='إضافة';
  edit:string='تعديل';
  agendaForm: FormGroup;
  isAdd:boolean=false;
  isEdit:boolean=false;
  previousStatus:boolean=false;
  error:boolean=false;
  semesters:any=[
    {
      semesterName:'الفصل الدراسي الأول',
      year:'2021/2022',
      status:'نشط',
      settings:''
    },
    {
      semesterName:'الفصل الدراسي الصيفي',
      year:'2021/2022',
      status:'مؤرشف',
      settings:''
    },
    {
      semesterName:'الفصل الدراسي الثاني',
      year:'2021/2022',
      status:'مؤرشف',
      settings:''
    }
  ];
  constructor() {
    this.initializationFG();
  }

  initializationFG(): void {
   this.agendaForm = new FormGroup({
     semesterName: new FormControl('', [Validators.required]),  
     semesterYear: new FormControl('', [Validators.required]),
     startRegister: new FormControl('',[Validators.required]),
     endRegister: new FormControl('', [Validators.required]),
     startTraining: new FormControl('', [Validators.required]),
     endTraining: new FormControl('', [Validators.required]),
     startSubmitReport: new FormControl('', [Validators.required]),
     endSubmitReport: new FormControl('', [Validators.required]),
   });
 }

  ngOnInit(): void {
  }
  showAddModal(){
    this.isAdd=true;
    this.isEdit=false;
    this.showModal=true;
  }
  showEditModal(){
    this.isEdit=true;
    this.isAdd=false;
    this.showModal=true;
    this.resetForm();
  }
  closeModal(){
    this.showModal=false;
    this.previousStatus=false;
    this.resetForm();
  }
  addingAgenda(){    
    if(this.agendaForm.valid){
      // post method to adding new agenda
      this.showModal=false;
      this.resetForm();
    }else{
      this.error=true;
    }
  }
  updateAgenda(){
    if(this.agendaForm.valid){
      // take values and use put method using id agenda to upate agenda
      this.showModal=false;
      this.resetForm();
    }else{
      this.error=true;
    }
  }
  showPreviousSemester(){
    this.previousStatus=true;
  }

  resetForm(){
    this.agendaForm.reset();
  }
}
