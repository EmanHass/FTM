import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.scss']
})
export class SupervisorComponent implements OnInit {
  labelButton:string='تسجيل الخروج';
  constructor() { }

  ngOnInit(): void {
  }

}
