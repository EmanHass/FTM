import { Company } from './../../shared-modules/model-interface/homePage/company';
import { Component, OnInit } from '@angular/core';
import { TrainingImportance } from 'src/app/shared-modules/model-interface/homePage/training-importance';
import { TrainingRequirement } from 'src/app/shared-modules/model-interface/homePage/training-req';
import { HomePageService } from 'src/app/shared-modules/services/home-page.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  idImg:any;
  modalStatus=false;
  imageSrc=`${environment.apiImage}`;
  requirements:TrainingRequirement[];
  trainingImportanceDtos:TrainingImportance[];
  company:Company;
  isLoading:boolean=false;
  constructor(private homeService:HomePageService) { }

  ngOnInit(): void {
    this.homeService.getAll().subscribe(
      (res:any)=>{
       this.requirements= res.trainingRequirementDtos;       
       this.trainingImportanceDtos= res.trainingImportanceDtos; 
       this.company= res.companyDtos;
       this.isLoading=true;              
      }
    );   
  }

  takeID(value:number){
    this.idImg=value;
  }
  showModal(value:boolean){
    this.modalStatus=value;
  }
  closedModel(status:boolean):void{
    this.modalStatus=status;
  }

}
