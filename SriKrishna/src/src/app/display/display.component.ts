import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, StudentData } from '../data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(public router: Router, sData: DataService) { }

  s: StudentData = new StudentData;
  studentData = new StudentData()
  studentsData = new Array<StudentData>();
  storeData(sData: StudentData, data: any) {
    debugger
    this.studentData = sData
    this.studentsData.push(this.studentData);
    localStorage.setItem('data', JSON.stringify(this.studentsData));
    data.form.reset();
    console.log(JSON.stringify(this.studentsData))
  }
  toHome() {
    this.router.navigate(["/''"])
  }
}


