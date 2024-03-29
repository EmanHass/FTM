import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data:any;
  apiLinkStd:string=`${environment.apiLink}/student/account`;
  apiLinkSupervisor:string= `${environment.apiLink}/supervisor/account`;
  apiAccount:string=`${environment.apiLink}/account/`;
  constructor(private http: HttpClient, private accountService:AccountService) { }

  login(email:string, password:string):Observable<any>{
    // if email and password exist in app then return data (post method)
    const parameters = { email:email, password:password };
    
   return this.getStatus() == "student"? this.http.post<any>(`${this.apiLinkStd}/loginStudent`, parameters):this.http.post<any>(`${this.apiLinkSupervisor}/loginSupervisor`, parameters);
  }

  checkStdNum(id:string):Observable<any>{
    let params = new HttpParams().set('UniversityStudentNum', id);
    return this.http.post(`${this.apiLinkStd}/checkStudentNumber`,null,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
      params: params
    });
  }

  signup(data:any):any{
    let formData=new FormData;
    formData.append('Email',data.email);
    formData.append('Password',data.password);
    formData.append('ConfirmPassword',data.confirmPassword);
    formData.append('PhoneNumber',data.phoneNumber);
    formData.append('NameTrainingCompany',data.nameTrainingCompany);
    formData.append('AddressCompany',data.addressCompany);
    formData.append('TrainingField',data.trainingField);
    formData.append('StartTrain',data.startTrain);
    formData.append('EndTrain',data.endTrain);
    formData.append('AcceptanceImg',data.acceptanceImg);
    formData.append('FirstName',data.firstName);
    formData.append('LastName',data.lastName);
    let params = new HttpParams().set('UniversityStudentNum', data.UniversityStudentNum);
    console.log(typeof data.UniversityStudentNum);
    

    return this.http.post(`${this.apiLinkStd}/registerStudent`,formData,{
      params: params,
      reportProgress: true,
      observe: 'events',
    });
  }

  checkEmail(email:string):Observable<any>{
    return this.http.post(`${environment.apiLink}/account/forgetPassword?email=${email}`,null);
  }

  confirmPasswordReset(dataReset:any):Observable<any>{
    const token=this.accountService.getUserToken();
    const data={
      "Email":dataReset.email,
      "Token":token,
      "NewPassword":dataReset.password
    }

    return this.http.post<any>(`${this.apiAccount}/confirmPasswordReset?Email=${data.Email}&Token=${data.Token}&NewPassword=${data.NewPassword}`,null);
  }

  getStatus(){
    return localStorage.getItem("status");
  }

  customEmail(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (value && !value.includes('.com')) {
        return { emailCustom: true };
      }
      return null;
    };
  }
  checkPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
      
      if (confirmPassword !== password) {        
        return { 'passwordMismatch': true };
      }
      return null;
    };
  }
    // Make Validation For Phone Filed In One Method
    customValidationPhone(max: number, min: number): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        
        if (value && isNaN(value)) return { isNumberic: true };
        else if (value && !(value.startsWith('059') || value.startsWith('056')))
          return { startNumber: true };
        else if (value && (value.length < min || value.length > max)) {
          return { maxMinLengthC: true, min: min };
        }
        return null;
      };
    }
}
