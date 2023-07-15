import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AgendaService } from 'src/app/shared-modules/services/agenda.service';
import { formatDate } from '@angular/common';
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
  isLoading:boolean=true;
  id:number;
  semesters:any=[];
  detailsSemseter:any=[];

  constructor(private agendaService:AgendaService) {
    this.initializationFG();
  }

  initializationFG(): void {
   this.agendaForm = new FormGroup({
     nameSemester: new FormControl('', [Validators.required]),  
     academicYear: new FormControl('', [Validators.required]),
     startStudentRegistration: new FormControl('',[Validators.required]),
     endStudentRegistration: new FormControl('', [Validators.required]),
     startTraining: new FormControl('', [Validators.required]),
     endTraining: new FormControl('', [Validators.required]),
     startTrainingReport: new FormControl('', [Validators.required]),
     endTrainingReport: new FormControl('', [Validators.required]),
   });
 }

  ngOnInit(): void {
    this.getAgenda();
    // this.agendaService.deleteAgenda(6).subscribe((res:any)=>{
    //   console.log('delete success');    
    // });
  }
  getAgenda(){
    this.agendaService.getAgenda().subscribe(
      (res:any)=>{
        console.log(res);       
        this.isLoading=false;
        this.semesters=res;
      }
    );
  }
  showAddModal(){
    this.isAdd=true;
    this.isEdit=false;
    this.showModal=true;
  }
  showEditModal(id:number){
    this.id=id;
    let agenda =this.getAgendaById(id);
    // Put data of Agenda to inputs to edit it
        this.agendaForm.setValue(
          {
            nameSemester:agenda.nameSemester,
            academicYear:agenda.academicYear,
            startStudentRegistration:formatDate(agenda.startStudentRegistration,'yyyy-MM-dd', 'en'),
            endStudentRegistration:formatDate(agenda.endStudentRegistration,'yyyy-MM-dd', 'en'),
            startTraining:formatDate(agenda.startTraining,'yyyy-MM-dd', 'en'),
            endTraining:formatDate(agenda.endTraining,'yyyy-MM-dd','en'),
            startTrainingReport:formatDate(agenda.startTrainingReport,'yyyy-MM-dd','en'),
            endTrainingReport:formatDate(agenda.endTrainingReport,'yyyy-MM-dd','en')
          
          });
    this.isEdit=true;
    this.isAdd=false;
    this.showModal=true;
  }
  closeModal(){
    this.showModal=false;
    this.previousStatus=false;
    this.resetForm();
  }
  addingAgenda(){    
    if(this.agendaForm.valid){      
      // post method to adding new agenda      
      this.agendaService.addAgenda(this.agendaForm.value).subscribe(
        (res) => { 
          this.getAgenda();        
        },
        (error) => console.error(error)
      );
      this.showModal=false;
      this.resetForm();
    }else{
      this.error=true;
    }
  }

  updateAgenda(){
    if(this.agendaForm.valid){      
      // take values and use put method using id agenda to upate agenda
      this.agendaService.updateAgenda(this.id,this.agendaForm.value).subscribe(
        (res:any)=>{
          console.log('update success');
          this.getAgenda();
        },
        (error)=>{
          console.log(error);
          
        });
      this.showModal=false;
      this.resetForm();
      
    }else{
      this.error=true;
    }
  }
  showPreviousSemester(id:number){
    this.previousStatus=true;
    const agendaOfSemester = this.getAgendaById(id);
    this.detailsSemseter=agendaOfSemester;    
  }

  resetForm(){
    this.agendaForm.reset();
  }

  getAgendaById(id:number):any{
    return this.semesters.find((agenda:any)=>agenda.id == id);
  }
}
