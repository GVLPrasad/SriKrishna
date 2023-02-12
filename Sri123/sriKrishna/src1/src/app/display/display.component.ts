import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, StudentData } from '../data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(public router: Router, sData: DataService) { }
  s: StudentData = new StudentData;
  studentData = new Array<StudentData>()
  formData = JSON.parse(localStorage.getItem('data')!);
  storeData(sData: StudentData) {
    debugger
    this.studentData.push(sData)
    localStorage.setItem('data', JSON.stringify(this.studentData));
    console.log(JSON.stringify(this.studentData))
  }
  toHome() {
    this.router.navigate(["/''"])
  }
  ngOnInit(): void {
  }

}


