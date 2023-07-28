import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SupervisorService } from '../../supervisor.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  formType = 'create';
  buttonLabel = 'انشاء';
  addCompany:string='إضافة شركة تدريبية';
  addCompanyExcel:string='تحميل ملف اكسل';
  addBtn:string='إضافة';
  editBtn:string='تعديل';
  companyForm:FormGroup;
  logoInput:FormControl;
  showModalStatus:boolean=false;
  isEdit:boolean=false;
  isAdd:boolean=true;
  error:boolean=false;
  companies:any;
  idEdit:number;
  isDeleted:boolean=false;
  isLoading:boolean=true;
  selectedFile:string;
  progressValue: string = '';
  constructor(private supervisorService:SupervisorService) { 
    
  }

  ngOnInit(): void {
    this.logoInput = new FormControl('', [Validators.required]);

    this.companyForm= new FormGroup({
      name: new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required]),
      address: new FormControl('',Validators.required),
      fieldsOfTrainings: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      linkCompany: new FormControl('',[Validators.required]),
      phoneNumber: new FormControl('',[Validators.required]),
      logoCompany: this.logoInput,
      file: new FormControl(''),
      companyCapacity: new FormControl('',[Validators.required]),
    });
    
    this.getListCompany();
  }
  HandleOnSubmit() {
    if (this.formType == 'create') {
      this.CreateCompany();
    }  

    this.ResetForm();
  }
  ResetForm() {
    this.formType = 'create';
    this.buttonLabel = 'انشاء';
    
    this.progressValue = '0%';
    this.companyForm.reset();

     
  }

  private  CreateCompany() {
    this.supervisorService.addCompany1(this.companyForm.value)
      .subscribe({
        next: (res) => {
          if (res.type == HttpEventType.UploadProgress) {
            if (res.total) {
              //not equal to null update progress
              this.progressValue =
                Math.round(100 * (res.loaded / res.total)) + '%';
            }
          }

          if (res.type == HttpEventType.Response && res.body != null) {
            console.log(res.body)
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
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
    console.log(this.companyForm.value);
    if(this.companyForm.valid){
      // adding new company using post method
      
      this.supervisorService.addNewCompany(this.companyForm.value).subscribe(
        (res:any)=>{
          console.log(res);
          
        },error=>{
          console.log(error);
          
        }
      );
      this.showModalStatus=false;
      this.resetForm();
    }else{
      this.error=true;
    }
  }
  editCompany(){
    if(this.companyForm.valid){
      // adding new company using post method
      this.supervisorService.updateCompany({...this.companyForm.value,id:this.idEdit},this.idEdit).subscribe(
        (res:any)=>{
          console.log(res);
          
        },error=>{
          console.log(error);
          
        }
      );
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
  HandleFileInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files!;
    if (files.length > 0) {
      // file exist
      this.logoInput.setValue(files[0]);
    }
    console.log('file input changed : ' + files);
  }
  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      
      this.selectedFile = inputElement.files[0].name;
      this.companyForm.patchValue({logoCompany:this.selectedFile});
      // this.selectedFile=`${this.srcImg}/${this.selectedFile}`;
      console.log(this.selectedFile);
      
    }
  }
}
