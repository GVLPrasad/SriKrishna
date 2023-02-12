import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dialob-box',
  templateUrl: './dialob-box.component.html',
  styleUrls: ['./dialob-box.component.scss']
})
export class DialobBoxComponent implements OnInit {
  formData = JSON.parse(localStorage.getItem('data')!);
  displayedColumns: string[] = ['Name', 'Email', 'Password','DOB', 'Gender','Phone'];
  length = 10;
  pageSize = 3;
  pageIndex = 0;
  pageSizeOptions = [1, 3, 5];
  showFirstLastButtons = true;  
  constructor() { }
  @ViewChild('page1') page1: MatPaginator | any;

  ngOnInit(): void {
    
    this.formData= new MatTableDataSource<any>(this.formData);
  }
  ngAfterViewInit() {
    this.formData.paginator = this.page1;
  }
 

}
