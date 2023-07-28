import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComputeDayService {

  constructor() { }

   getDaysDifference(startDate:any, endDate:any) {
    const oneDayMs = 24 * 60 * 60 * 1000; // Number of milliseconds in one day
    const startDateTime = new Date(startDate).getTime();
    const endDateTime = new Date(endDate).getTime();
    const differenceMs = endDateTime - startDateTime;
    const daysDifference = Math.floor(differenceMs / oneDayMs);
  
    return daysDifference;
  }
}
