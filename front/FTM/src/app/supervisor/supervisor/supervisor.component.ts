import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/auth/account.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.scss']
})
export class SupervisorComponent implements OnInit {
  labelButton:string='تسجيل الخروج';
  constructor(private accountService:AccountService, private router:Router) { }

  ngOnInit(): void {
  }
  logout():void{
    this.accountService.logout();
  }

}
