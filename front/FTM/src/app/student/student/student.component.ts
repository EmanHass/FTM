import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/auth/account.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  labelButton:string='تسجيل الخروج';
  constructor(private accountService:AccountService, private router:Router) { }

  ngOnInit(): void {
  }
  logout():void{
    this.accountService.logout();
  }

}
