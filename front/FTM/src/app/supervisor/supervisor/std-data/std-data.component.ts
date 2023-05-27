import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-std-data',
  templateUrl: './std-data.component.html',
  styleUrls: ['./std-data.component.scss']
})
export class StdDataComponent implements OnInit {
  students:any=[
    {
      name:'أسيل الوديه',
      email:'asil@gmail.com',
      stdNum:20180401
    },
    {
      name:'إيمان حسونة',
      email:'eman@gmail.com',
      stdNum:20180293
    },
    {
      name:'محمد العطار',
      email:'mohammed@gmail.com',
      stdNum:2018254
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
