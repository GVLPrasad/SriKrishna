import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor() { }

}
export class StudentData {
  offers: string | undefined
  rollNo: string | undefined
  studentName: string | undefined
  employerName: string | undefined
  package: string | undefined
  companyType: string | undefined
  campusType: string | undefined
  appointmentRefNo: string | undefined
  dateOfAppointnet: string | undefined


}
