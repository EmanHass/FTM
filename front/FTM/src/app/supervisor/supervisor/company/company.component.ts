import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  addCompany:string='إضافة شركة تدريبية';
  addCompanyExcel:string='تحميل ملف اكسل';
  addBtn:string='إضافة';
  editBtn:string='تعديل';
  companyForm:FormGroup;
  showModalStatus:boolean=false;
  isEdit:boolean=false;
  isAdd:boolean=true;
  error:boolean=false;
  companies:any=[
    {
      name:'شركة جوال',
      field:'التصميم والبرمجة',
      address:'غزة',
    },
    {
      name:'شركة جوال',
      field:'شركة الإتصالات',
      address:'رفح',
    },
    {
      name:'شركة تعاون',
      field:'التصميم والبرمجة',
      address:'غزة',
    }
  ];
  constructor() { 
    this.companyForm= new FormGroup({
      companyName: new FormControl('',Validators.required),
      companyAddress: new FormControl('',Validators.required),
      companyField: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
    });
  }

  ngOnInit(): void {
  }
  showModal(){
    this.isAdd=true;
    this.isEdit=false;
    this.showModalStatus=true;
  }
  closeModal(){
    this.showModalStatus=false;
    this.resetForm();
  }
  resetForm(){
    this.companyForm.reset();
  }
  addingCompany(){
    if(this.companyForm.valid){
      // adding new company using post method
      this.showModalStatus=false;
      this.resetForm();
    }else{
      this.error=true;
    }
  }
  editCompany(){
    if(this.companyForm.valid){
      // adding new company using post method
      this.showModalStatus=false;
      this.resetForm();
    }else{
      this.error=true;
    }   
  }
  showEditModal(){
    this.isEdit=true;
    this.isAdd=false;
    this.showModalStatus=true;
  }
}
