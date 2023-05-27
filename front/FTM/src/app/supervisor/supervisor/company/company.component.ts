import { Component, OnInit } from '@angular/core';

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
  showModalStatus:boolean=false;
  isEdit:boolean=false;
  isAdd:boolean=true;
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
  constructor() { }

  ngOnInit(): void {
  }
  showModal(){
    this.isAdd=true;
    this.isEdit=false;
    this.showModalStatus=true;
  }
  closeModal(){
    this.showModalStatus=false;
  }
  showEditModal(){
    this.isEdit=true;
    this.isAdd=false;
    this.showModalStatus=true;
  }
}
