import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  passwordLabel:string='تغيير كلمة المرور';
  phoneLabel:string='تغيير رقم الهاتف';
  constructor() { }

  ngOnInit(): void {
  }

}
