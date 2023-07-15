import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/shared-modules/services/agenda.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  agenda:any;
  semesterName:string;
  semesterYear:string;
  startAgenda:any;
  endAgenda:any;
  isLoading:boolean=false;
  constructor(private agendaService:AgendaService) { }

  ngOnInit(): void {

    this.agendaService.getAgenda().subscribe(
      (res:any)=>{
        this.isLoading=true;        
        const agenda = res?.find((i:any)=>i.statusSemester == true);
        this.agenda=[
          {
            title:'بداية تسجيل الطلبة للتدريب',
            date: agenda?.startStudentRegistration
          },
          {
            title:'بداية تدريب الطلبة',
            date:agenda?.startTraining
          },
          {
            title:'بداية تسليم الطلبة لتقرير التدريب',
            date:'2022-08-14'
          },
          {
            title:'نهاية تسجيل الطلبة للتدريب',
            date:agenda?.endStudentRegistration
          },
          {
            title:'نهاية تدريب الطلبة',
            date: agenda?.endTraining
          },
          {
            title:'نهاية تسليم الطلبة لتقرير التدريب',
            date:'2022-08-17'
          }
        ];
        this.semesterName=agenda?.nameSemester;
        this.semesterYear=agenda?.academicYear;
        this.startAgenda=this.agenda.slice(0,3);
        this.endAgenda=this.agenda.slice(3,this.agenda.length);
      }
    );

  }

}
