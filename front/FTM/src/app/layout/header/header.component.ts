import { Component, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/shared-modules/services/home-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  trainingHeader:any;
  constructor(private homeService:HomePageService) { }

  ngOnInit(): void {
    this.homeService.getAll().subscribe(
      (res:any)=>{
        this.trainingHeader=res.trainingDtos;
      }
    );
  }

}
