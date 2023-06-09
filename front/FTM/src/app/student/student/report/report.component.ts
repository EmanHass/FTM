import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  reportForm: FormGroup;
  labelBtn:string='تقييم';
  constructor() {
     this.initializationFG();
   }

   initializationFG(): void {
    this.reportForm = new FormGroup({
      NumTasks: new FormControl('', [
        Validators.required,
      ]),  
      rating: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

}
