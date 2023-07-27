import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SupervisorService } from '../../supervisor.service';

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
  companies:any;
  idEdit:number;
  isDeleted:boolean=false;
  isLoading:boolean=true;
  selectedFile:string;
  constructor(private supervisorService:SupervisorService) { 
    this.companyForm= new FormGroup({
      name: new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required]),
      address: new FormControl('',Validators.required),
      fieldsOfTrainings: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      linkCompany: new FormControl('',[Validators.required]),
      phoneNumber: new FormControl('',[Validators.required]),
      logoCompany: new FormControl('',[Validators.required]),
      companyCapacity: new FormControl('',[Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getListCompany();
  }
  getListCompany(){
    this.supervisorService.getCompanyList().subscribe(
      (res:any)=>{
        this.companies=res;
        this.isLoading=false;
      },
      error=>{
        console.log(error);
        
      }
    );
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
  showEditModal(id:number){
    this.idEdit=id;
    this.isEdit=true;
    this.isAdd=false;
    this.showModalStatus=true;

    const updateCompany= this.companies.find((i:any)=>i.id==id);
    delete updateCompany.id;
    this.companyForm.setValue(updateCompany);
    }
  deleteCompany(id:number){
    this.supervisorService.deleteCompanyById(id).subscribe(
      res=>{
        this.isDeleted=res; 
        this.getListCompany();
        setTimeout(() => {
          this.isDeleted = false;
          this.closeModal();
        }, 2000);       
      },
      error=>{
        console.log(error);
        
      }
    );
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0].name;
      // this.selectedFile=`${this.srcImg}/${this.selectedFile}`;
      console.log(this.selectedFile);
      
    }
  }
}
