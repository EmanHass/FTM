import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registrationFG: FormGroup;
  constructor() {
    this.initializationFG();
  }
  initializationFG(): void {
    this.registrationFG = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        this.customEmail(),
      ]),  
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
    });
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
  ngOnInit(): void {
  }

}
